import React from "react";
import "./Header.css";
import { IoMdHome } from "react-icons/io";

const Header = () => {
  return (
    <div className="header">
      <header className="d-flex flex-wrap justify-content-left py-2 mb-2 border-bottom ">
        <span className="fs-4">Simple header</span>
      </header>

      <nav className="navbar-expand-md navbar-light bg-light mb-1 border-bottom">
        <ul className="navbar-nav me-auto mb-0 mb-lg-0">
          <li className="nav-item " >
            <a
              className="nav-link"
              role="button"
              aria-expanded="false"
              href="/home"
            >
              <IoMdHome  className="icon"/>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle "
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              href="application"
            >
              Application
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
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
              href="/authserver"
            >
             Auth Server
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="button"
              aria-expanded="false"
              href="/myInfo"
            >
             My Info
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="button"
              aria-expanded="false"
              href="/support"
            >
             Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
