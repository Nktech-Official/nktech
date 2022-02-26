import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  NkTech
                </NavLink>
          
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                         className={({ isActive }) => (isActive ? 'nav-link menu_active' : 'nav-link')}
                        aria-current="page"
                        to=""
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => (isActive ? 'nav-link menu_active' : 'nav-link')} to="service">
                        Service
                      </NavLink>
                    </li>
                 
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => (isActive ? 'nav-link menu_active' : 'nav-link')}to="about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => (isActive ? 'nav-link menu_active' : 'nav-link')} to="contact">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
