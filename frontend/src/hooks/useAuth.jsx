import React, { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";
const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  const isRun = useRef(false);
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const keycloak = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
    });

    keycloak
      .init({
        onLoad: "login-required",
      })
      .then((res) => {
        setIsLogin(res);
        setToken(keycloak.token);
      });
  }, []);

  return { isLogin, token };
};

export default useAuth;
