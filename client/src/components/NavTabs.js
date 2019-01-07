import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" id="navName">Crypto-Watch</a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stocks" className={window.location.pathname === "/stocks" ? "nav-link" : "nav-link"}>
              Stocks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={window.location.pathname === "/about" ? "nav-link" : "nav-link"}>
              About
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <span className="navbar-text">Username goes here</span>
        </ul> 
      </div>
    </nav>
  )
}

export default NavTabs;