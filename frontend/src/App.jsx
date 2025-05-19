import React from "react";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";

const App = () => {
  const { isLogin, token } = useAuth();
  return isLogin ? <Protected token={token} /> : <Public />;
};

export default App;
