import React, {Component} from 'react';

import Nav from './components/Nav';
import ExpandedNav from './components/ExpandedNav';
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';

import './layout/config/_base.sass';

import defiAccelerator from './images/defi-accelerator.PNG'
import compoundData from './images/compound-data.PNG'
import cssBundle from './images/css-bundle.PNG'

class App extends Component {
  componentDidMount = () => {
    this.fadeInElements();
  }

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

  fadeInElements = () => {
    // Get project elements
    const headers = Array.from(document.querySelectorAll('.project__heading'));
    const images = Array.from(document.querySelectorAll('.project__image'));
    const imageBackgrounds = 
      Array.from(document.querySelectorAll('.project__image-background'));

    const projectElements = headers.concat(images, imageBackgrounds);

    // Get about elements
    const text = document.querySelector('.about__text');
    const image = document.querySelector('.about__image');
    const imageBackground = 
      document.querySelector('.about__image-background');

    const aboutElements = [text, image, imageBackground];

    // Concatenate elements
    const elements = projectElements.concat(aboutElements);

    window.onscroll = () => {
      // Fade in elements when in range
      elements.forEach((element) => {
        if(window.scrollY + (window.innerHeight / 4) * 3 > element.offsetTop) {
          element.classList.add('active');
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Nav handleNavClick={this.handleNavClick} />
        <ExpandedNav handleNavClick={this.handleNavClick} />
        <Hero />
        <Project 
          header="Defi Accelerator"
          description="Marketing page for an Ethereum application." 
          id="defi-accelerator"
          image={defiAccelerator}
          index={0}
          link="http://www.defiaccelerator.io/"
        />
        <Project 
          header="Compound Data"
          description="Displays API data from Compound.finance."
          id="compound-data" 
          image={compoundData}
          index={1}
          link="https://kadenzipfel.github.io/compound-data/"
        />
        <Project 
          header="CSS Bundle"
          description="A package for custom modular css components."
          id="css-bundle" 
          image={cssBundle}
          index={2}
          link="https://kadenzipfel.github.io/css-bundle/"
        />
        <About />
      </div>
    );
  }
}

export default App;
