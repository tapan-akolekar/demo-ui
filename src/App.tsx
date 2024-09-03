import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { AppRoutes } from "./components/AppRoutes";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Header />
//         <main className={"page-content"}>
//           <AppRoutes />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  const {
    loginWithRedirect,
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    const handleAuth = async () => {
      if (!isAuthenticated && !isLoading) {
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
    handleAuth();
  }, [isAuthenticated, loginWithRedirect, getAccessTokenSilently, isLoading]);

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
