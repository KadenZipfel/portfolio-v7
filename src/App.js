import React, {Component} from 'react';

import Hero from './components/Hero';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default App;
