import React, {Component} from 'react';

import '../layout/components/nav.sass';
import github from '../images/github.png';

class Nav extends Component {
  handleClick = () => {
    this.toggleMenu();
    this.toggleExpandedNav();
  }

  toggleMenu = () => {
    const navMenu = document.querySelector('.nav__menu');

    if(navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    } else {
      navMenu.classList.add('active');
    }
  }

  toggleExpandedNav = () => {
    const expandedNav = document.querySelector('.expanded-nav');

    if(expandedNav.classList.contains('active')) {
      expandedNav.classList.remove('active');
    } else {
      expandedNav.classList.add('active');
    }
  }

  render() {
    return (
      <nav className="nav">
        <a 
          href="https://github.com/KadenZipfel" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            className="nav__icon" 
            src={github} 
            alt="Github" 
          />
        </a>
        <div className="nav__menu" onClick={this.handleClick}>
          <div className="nav__bar nav__bar--1"></div>
          <div className="nav__bar nav__bar--2"></div>
          <div className="nav__bar nav__bar--3"></div>
        </div>
      </nav>
    );
  }
}

export default Nav;