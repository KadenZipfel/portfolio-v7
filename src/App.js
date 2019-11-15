import React, {Component} from 'react';

import Hero from './components/Hero';
import Nav from './components/Nav';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
