import React from "react";
import "./Navbar.css";
import logo from "./images/firstBAlogo.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-md" data-bs-theme="dark">
        <h1 className="navbar-mono">BA</h1>

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
              Belinda Amezquita
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
                  className="btn active"
                  aria-current="page"
                  href="/"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="btn active"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  href="#collapseExample"
                  rel="noreferrer"
                >
                  Projects
                </a>
                <div className="collapse" id="collapseExample">
                  <ul>
                    <li>
                      <a className="nav-link" href="/" rel="noreferrer">
                        Project 1
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/" rel="noreferrer">
                        Project 2
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/" rel="noreferrer">
                        Project 3
                      </a>
                    </li>

                    <li>
                      <a className="nav-link" href="/" rel="noreferrer">
                        Project 4
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="btn active" href="/" rel="noreferrer">
                  About me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
