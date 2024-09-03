import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout({
        logoutParams: {
          returnTo: `${window.location.origin}/logout-confirmation`,
        },
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
};
export default LogoutButton;
