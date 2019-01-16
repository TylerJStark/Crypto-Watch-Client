import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.scss';

function NavTabs() {
  return (
    <div class="admin">
  <header class="admin__header">
    <a href="#" class="logo">
      <h1><img src="assets/media/Crypto-Watch-logo.png">
      </img></h1>
    </a>
    <div class="toolbar">
      <button class="btn btn--primary">Stock button</button>
      <a href="#" class="about">
        About
      </a>
      <a href="#" class="logout">
        Log Out
      </a>
    </div>
  </header>
  <nav class="admin__nav">
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" href="#">Item</a>
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default NavTabs;