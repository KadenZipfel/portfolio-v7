import React, {Component} from 'react';

import Nav from './components/Nav';
import ExpandedNav from './components/ExpandedNav';
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';

import './layout/config/_base.sass';

import defiAccelerator from './images/defi-accelerator.png'
import compoundGov from './images/compound-gov.png'
import ethereumLanding from './images/ethereum-landing.png'

class App extends Component {
  private navMenu_: HTMLElement;
  private expandedNav_: HTMLElement;
  private navLinks_: HTMLElement[];

  componentDidMount = (): void => {
    this.navMenu_ = document.querySelector('.nav__menu');
    this.expandedNav_ = document.querySelector('.expanded-nav');
    this.navLinks_ = Array.from(document.querySelectorAll('.expanded-nav__link'));

    this.handleNavClick();
  }

  handleNavClick = (): void => {
    this.navMenu_.addEventListener('click', () => {
      this.toggleNavMenu();
      this.toggleExpandedNav();
    });
    this.navLinks_.forEach((link: HTMLElement) => {
      link.addEventListener('click', () => {
        this.toggleNavMenu();
        this.toggleExpandedNav();
      });
    });
  }

  toggleNavMenu = (): void => {
    if(this.navMenu_.classList.contains('active')) {
      this.navMenu_.classList.remove('active');
    } else {
      this.navMenu_.classList.add('active');
    }
  }
  
  toggleExpandedNav = (): void => {
    if(this.expandedNav_.classList.contains('active')) {
      this.expandedNav_.classList.remove('active');
    } else {
      this.expandedNav_.classList.add('active');
    }
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <ExpandedNav />
        <Hero />
        <Project 
          header="Defi Accelerator"
          description="Marketing page for an Ethereum application." 
          id="defi-accelerator"
          image={defiAccelerator}
          index={0}
          githubLink="https://github.com/KadenZipfel/defi-accelerator-io"
          link="https://kadenzipfel.github.io/defi-accelerator-io/"
        />
        <Project 
          header="Compound Governance"
          description="A user interface for Compound's governance system."
          id="compound-data" 
          image={compoundGov}
          index={1}
          githubLink="https://github.com/KadenZipfel/compound-governance"
          link="https://kadenzipfel.github.io/compound-governance/"
        />
        <Project 
          header="Ethereum"
          description="Re-make of ethereum.org with night mode."
          id="ethereum" 
          image={ethereumLanding}
          index={2}
          githubLink="https://github.com/KadenZipfel/ethereum-landing"
          link="https://kadenzipfel.github.io/ethereum-landing/"
        />
        <About />
      </div>
    );
  }
}

export default App;
