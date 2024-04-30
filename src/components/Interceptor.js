import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getCookie, removeCookie } from "../api/cookie";
import member from "../api/client";

export const Interceptor = ({ children }) => {
  const navigate = useNavigate();

  const requestInterceptor = member.interceptors.request.use(
    async config => {
      const token = getCookie("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  const responseInterceptor = member.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const { config } = error;
      const response = error.response || {};
      const status = response.status || null;
      if (status === 401) {
        try {
          if (config && config.headers && config.headers.Authorization) {
            removeCookie("accessToken");
          }
          navigate("/login");
        } catch (error) {
          console.error(error);
        }
      }
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      member.interceptors.request.eject(requestInterceptor);
      member.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);

  return children;
};
