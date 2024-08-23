import {
    Route,
    BrowserRouter as Router,
   
    Routes,
   
  } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Application from "./Application";
import AuthServer from "./AuthServer";
import MyInfo from "./MyInfo";
import Support from "./Support";
  
  
  export const AppRoutes = () => {
   
    return (
        <Router>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/authserver" element={<AuthServer />} />
          <Route path="/myInfo" element={<MyInfo />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    );
  };
  