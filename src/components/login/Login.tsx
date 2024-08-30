import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default Login;
//with token

const Login = () => {
  const { loginWithPopup, getAccessTokenSilently } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithPopup();
      const access_token = await getAccessTokenSilently();
      localStorage.setItem("id_token", access_token);
      console.log("token", access_token);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogin}>Log in</button>;
};
export default Login;
