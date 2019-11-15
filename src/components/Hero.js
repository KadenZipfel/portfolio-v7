import React, {Component} from 'react';

import '../layout/components/hero.sass';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <h1 className="hero__header">
          Hi, I'm Kaden.
        </h1>
        <p className="hero__scroll">
          Scroll down to see some of my work.
        </p>
      </section>
    );
  }
}

export default Hero;