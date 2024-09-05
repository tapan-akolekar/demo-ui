import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { AppRoutes } from "./components/AppRoutes";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {
    loginWithRedirect,
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     loginWithRedirect();
  //   } else {
  //     try {
  //       getAccessTokenSilently().then((access_token) => {
  //         localStorage.setItem("id_token", access_token);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }, [isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently]);

  useEffect(() => {
    console.log("Effect called");
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    } else {
      getAccessTokenSilently()
        .then((access_token) => {
          localStorage.setItem("id_token", access_token);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  return (
    <div className="App">
      <div>
        <Header />
        <main className={"page-content"}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
