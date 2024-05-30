import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getCookie, removeCookie, setCookie } from "../api/cookie";
import api from "../api/client";

export const Interceptor = ({ children }) => {
  const navigate = useNavigate();
  const requestInterceptor = api.interceptors.request.use(
    async config => {
      const token = getCookie("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  const responseInterceptor = api.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const { config } = error;
      const response = error.response || {};
      const status = response.status || null;
      const refreshToken = getCookie("refreshToken");

      if (status === 401) {
        try {
          const { data } = await api.post(`/user/refresh`, {
            refreshToken,
          });
          const token = data;
          setCookie("token", token);
          if (config?.headers && config.headers?.Authorization) {
            config.headers.Authorization = `Bearer ${token}`;
            const retryResponse = await api(config);
            console.log("갱신 재시도 : ", retryResponse);
            return retryResponse;
          }
        } catch (error) {
          navigate("/");
          removeCookie("token");
          removeCookie("refreshToken");
          console.log("리프레시실패 : 해당 영업점에 문의해주세요.");
        }
      }
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);

  return children;
};
