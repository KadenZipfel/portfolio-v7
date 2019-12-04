import React, {Component} from 'react';

import Nav from './components/Nav';
import ExpandedNav from './components/ExpandedNav';
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';

import './layout/config/_base.sass';

import defiAccelerator from './images/defi-accelerator.png'
import compoundData from './images/compound-data.png'
import cssBundle from './images/css-bundle.png'

class App extends Component {
  private readonly navMenu_: HTMLElement;
  private readonly expandedNav_: HTMLElement;
  private readonly projectHeaders_: HTMLElement[];
  private readonly projectImages_: HTMLElement[];
  private readonly aboutText_: HTMLElement;
  private readonly aboutImage_: HTMLElement;

  constructor(props: any) {
    super(props);

    this.navMenu_ = document.querySelector('.nav__menu');
    this.expandedNav_ = document.querySelector('.expanded-nav');

    this.projectHeaders_ = Array.from(document.querySelectorAll('.project__heading'));
    this.projectImages_ = Array.from(document.querySelectorAll('.project__image'));

    this.aboutText_ = document.querySelector('.about__text');
    this.aboutImage_ = document.querySelector('.about__image');
  }

  componentDidMount = (): void => {
    // this.fadeInElements();
  }

  handleNavClick = (): void => {
    this.navMenu_.addEventListener('click', () => {
      this.toggleNavMenu();
      this.toggleExpandedNav();
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

  fadeInElements = (): void => {
    // Concatenate elements
    const elements: HTMLElement[] = this.projectHeaders_.concat(this.projectImages_, this.aboutText_, this.aboutImage_);

    window.onscroll = (): void => {
      // Fade in elements when in range
      elements.forEach((element: HTMLElement) => {
        if(window.scrollY + (window.innerHeight / 4) * 3 > element.offsetTop) {
          element.classList.add('active');
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Nav />
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
