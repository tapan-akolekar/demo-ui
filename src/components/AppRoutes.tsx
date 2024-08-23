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
import Footer from "./Footer";
  
  
  export const AppRoutes = () => {
   
    return (
        <Router>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/https://okta.deere.com/selfServiceTool/" element={<Home />} />
          <Route path="/https://okta.deere.com/selfServiceTool/appCreation" element={<Application />} />
          <Route path="/https://okta.deere.com/selfServiceTool/authServerMenu" element={<AuthServer />} />
          <Route path="/https://okta.deere.com/selfServiceTool/userInfo" element={<MyInfo />} />
          <Route path="https://okta.deere.com/selfServiceTool/support" element={<Support />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    );
  };
  