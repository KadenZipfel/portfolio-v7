import React, {Component} from 'react';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Project from './components/Project';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="outer-wrapper">
          <div className="inner-wrapper">
            <Hero />
            <Project 
              header="Defi Accelerator"
              description="Marketing page for an Ethereum application." 
            />
            <Project 
              header="Compound Data"
              description="Displays API data from Compound.finance." 
            />
            <Project 
              header="CSS Bundle"
              description="A package for custom modular css components." 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
