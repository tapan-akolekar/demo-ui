import React from "react";
import "./Header.css";
import { IoMdHome } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { logout } = useAuth0();

  return (
    <div className="header">
      <header className="d-flex flex-wrap justify-content-left py-2 mb-2 border-bottom ">
        <span className="fs-4">Simple Header</span>
      </header>

      <nav className="navbar-expand-md navbar-light bg-light mb-1 border-bottom">
        <ul className="navbar-nav me-auto mb-0 mb-lg-0">
          <li className="nav-item ">
            <a
              className="nav-link"
              role="button"
              aria-expanded="false"
              href="/home"
            >
              <IoMdHome className="icon" />
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle "
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              href="/selfServiceTool/appCreation"
            >
              Application
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/addApplication">
                  Add Application
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="button"
              aria-expanded="false"
              href="/selfServiceTool/authServerMenu"
            >
              Auth Server
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="button"
              aria-expanded="false"
              href="/selfServiceTool/userInfo"
            >
              My Info
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="button"
              aria-expanded="false"
              href="/selfServiceTool/support"
            >
              Support
            </a>
          </li>

          <ul className="navbar-nav ms-auto mb-0 mb-lg-0 mr-3">
            <li className="nav-item">
              <a
                className="nav-link "
                role="button"
                aria-expanded="false"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: `${window.location.origin}/logout-confirmation`,
                    },
                  })
                }
              >
                Log Out
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
