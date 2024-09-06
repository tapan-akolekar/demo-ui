import { useEffect } from "react";
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

  useEffect(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    } else if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        console.log("access_token", token);
        localStorage.setItem("it_token", token);
      });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

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
