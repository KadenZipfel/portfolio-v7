import React, {Component} from 'react';

import '../layout/components/nav.sass';
import github from '../images/github.png';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <a 
          href="https://github.com/KadenZipfel/portfolio-v7" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            className="nav__icon" 
            src={github} 
            alt="Github" 
          />
        </a>
        <div className="nav__menu">
          <div className="nav__bar nav__bar--1"></div>
          <div className="nav__bar nav__bar--2"></div>
          <div className="nav__bar nav__bar--3"></div>
        </div>
      </nav>
    );
  }
}

export default Nav;