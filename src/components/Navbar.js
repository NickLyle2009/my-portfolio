import React from "react";
import '../App.css';

export default function Navbar({ currentPage, handlePageChange }) {
    return (
      <ul className="nav navbar-tabs">
        <li className="navbar-tab">
          <a
            href="#aboutMe"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="navbar-tab">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="navbar-tab">
          <a
            href="#myWork"
            onClick={() => handlePageChange('MyWork')}
            className={currentPage === '' ? 'nav-link active' : 'nav-link'}
          >
            My Work
          </a>
        </li>
      </ul>
    );
  }
