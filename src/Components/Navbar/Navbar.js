import React from 'react';
import { FaMicrophone, FaSearch } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header-padding">
      <nav>
        <ul>
          <li className="navbar-links-mobile">

            <NavLink exact="true" to="/" className="navbar-link-mobile">
              <p className="year">2023</p>
            </NavLink>
          </li>
          <li className="navbar-icons-mobile">
            <FaSearch className="navbar-search-bar-mobile" />
            <FaMicrophone className="navbar-microphone-mobile" />
            <ImSun className="navbar-settings-mobile" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
