import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = () => (
  <div id="side-panel">
    <div className="home-link-container">
      <NavLink
        className="home-link"
        to="/"
        exact
        activeClassName="nav-link-style-selected"
      >
        Sustainable Energy
      </NavLink>
    </div>

    <div className="nav-link-container">
      <p className="nav-link-spacing">
        <i className="fas fa-book"></i>
        <NavLink
          className="nav-link-style"
          to="/literature"
          activeClassName="nav-link-style-selected"
        >
          Literature Review
        </NavLink>
      </p>
      <p className="nav-link-spacing">
        <i className="fas fa-leaf"></i>
        <NavLink
          className="nav-link-style"
          to="/growth"
          activeClassName="nav-link-style-selected"
        >
          Sustainable Energy Growth
        </NavLink>
      </p>
      <p className="nav-link-spacing">
        <i className="fas fa-gas-pump"></i>
        <NavLink
          className="nav-link-style"
          to="/question-two"
          activeClassName="nav-link-style-selected"
        >
          COVID-19 and GHG Emissions
        </NavLink>
      </p>
      <p className="nav-link-spacing">
        <i className="fas fa-battery-half"></i>
        <NavLink
          className="nav-link-style"
          to="/question-four"
          activeClassName="nav-link-style-selected"
        >
          Eliminating Fossil Fuels
        </NavLink>
      </p>
      <p className="navLinkSpacing">
        <i className="fas fa-vial"></i>
        <a className="navLinkStyle" href="/methods">
          Methods
        </a>
      </p>
    </div>
  </div>
);

export default SidePanel;
