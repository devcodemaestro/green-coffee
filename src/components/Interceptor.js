import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getCookie, removeCookie } from "../api/cookie";
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
      if (status === 401) {
        try {
          if (config && config.headers && config.headers.Authorization) {
            removeCookie("token");
          }
          navigate("/");
        } catch (error) {
          console.error(error);
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
