import React, { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
    const keycloak = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
    });
    keycloak.init({
      onLoad: "login-required",
    }).then((res) => setIsLogin(res));
  }, []);

  return isLogin;
};

export default useAuth;
