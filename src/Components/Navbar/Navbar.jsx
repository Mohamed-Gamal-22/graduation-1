import React from "react";
import style from "./Navbar.module.css";
import profile from "../../images/three.jpg";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.bgbtn}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width={161} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <span className="nav-link">Dashboard</span>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="text-decoration-none">
                  <span className="nav-link">Transactions</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link">Bills</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Payment</span>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-flex align-items-center">
                <i className="fa-regular fa-bell text-dark fs-5 me-2 pointer"></i>
                <span className="nav-link" href="#">
                  <img
                    src={profile}
                    className={`${style.prof} p-1`}
                    alt="profile"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
