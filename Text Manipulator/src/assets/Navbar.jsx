import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === 'white'? 'dark': 'white'}`} href="/">
          Manipulator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode === 'white'? 'dark': 'white'}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode === 'white'? 'dark': 'white'}`} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch" >
          <input className="form-check-input text-light" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode === 'white'? 'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">{props.text}</label>
        </div>
      </div>
    </nav>
    </>
  );
}
