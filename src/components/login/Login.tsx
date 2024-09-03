import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, getAccessTokenSilently, isAuthenticated } =
    useAuth0();

  useEffect(() => {
    console.log("useEffect");
    handleLogin();
  });

  const handleLogin = async () => {
    console.log("handleLogin called");
    if (!isAuthenticated) {
      try {
        await loginWithRedirect();
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const access_token = await getAccessTokenSilently();
        localStorage.setItem("id_token", access_token);
        console.log("token", access_token);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return null;
};
export default Login;
