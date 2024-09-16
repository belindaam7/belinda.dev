import React from "react";
import "./Navbar.css";
import logo from "./images/firstBAlogo.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar">
        
          <a class="navbar-brand" href="/" target="_blank" rel="noreferrer">
            <img
              src={logo}
              width="65"
              height="60"
              class="d-inline-block align-top"
              alt="brand logo"
            ></img>
            <span className="full-name">Belinda Amezquita</span>
          </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" rel="noreferrer">
                  Link
                </a>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    rel="noreferrer"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                </li>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/" rel="noreferrer">
                      Action1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" rel="noreferrer">
                      Action2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" rel="noreferrer">
                      Action3
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" rel="noreferrer">
                      Some other thing here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      
      </nav>
    </div>
  );
}
