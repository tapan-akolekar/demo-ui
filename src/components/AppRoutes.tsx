import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import AuthServer from "./AuthServer";
import MyInfo from "./MyInfo";
import Support from "./Support";
import Footer from "./Footer";
import Application from "./Application";
import Admin from "./Admin";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/selfServiceTool/appCreation" element={<Application />} />
        <Route
          path="/selfServiceTool/authServerMenu"
          element={<AuthServer />}
        />
        <Route path="/selfServiceTool/userInfo" element={<MyInfo />} />
        <Route path="/selfServiceTool/support" element={<Support />} />
        <Route path="/selfServiceTool/admin" element={<Admin />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};
