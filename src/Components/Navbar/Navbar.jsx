import React from "react";
import style from "./Navbar.module.css";
import profile from "../../images/three.jpg";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png"

export default function Navbar() {
  return (
    <>
      <nav class={`navbar navbar-expand-lg ${style.bgbtn}`}>
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} width={161} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link">Dashboard</a>
              </li>
              <li class="nav-item">
                <NavLink to="/" className="text-decoration-none">
                  <a class="nav-link">Transactions</a>
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link">Bills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Payment</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item d-flex align-items-center">
                <i class="fa-regular fa-bell text-dark fs-5 me-2 pointer"></i>
                <a class="nav-link" href="#">
                  <img
                    src={profile}
                    className={`${style.prof} p-1`}
                    alt="profile"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
