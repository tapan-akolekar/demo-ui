import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default Login;

const Login = () => {
  const { loginWithPopup, getAccessTokenSilently } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithPopup();
      const token = await getAccessTokenSilently();
      // Store the token in local storage or a secure storage mechanism
      localStorage.setItem("token", token);
      console.log("token", token);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogin}>Log in</button>;
};
export default Login;
