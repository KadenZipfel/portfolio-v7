import React, {Component} from 'react';

import Nav from './components/Nav';
import ExpandedNav from './components/ExpandedNav';
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';

import './layout/config/_base.sass';

class App extends Component {
  handleNavClick = () => {
    this.toggleNavMenu();
    this.toggleExpandedNav();
  }

  toggleNavMenu = () => {
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
      <div>
        <Nav handleNavClick={this.handleNavClick} />
        <ExpandedNav handleNavClick={this.handleNavClick} />
        <div className="outer-wrapper">
          <div className="inner-wrapper">
            <Hero />
            <Project 
              header="Defi Accelerator"
              description="Marketing page for an Ethereum application." 
              id="defi-accelerator"
            />
            <Project 
              header="Compound Data"
              description="Displays API data from Compound.finance."
              id="compound-data" 
            />
            <Project 
              header="CSS Bundle"
              description="A package for custom modular css components."
              id="css-bundle" 
            />
            <About />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
