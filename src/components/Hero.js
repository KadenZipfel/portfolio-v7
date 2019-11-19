import React, {Component} from 'react';

import '../layout/components/hero.sass';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroHeader: ''
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.typewriter();
    }, 500);
  }

  typewriter = () => {
    const header = "Hi, I'm Kaden.";

    let headerSentence = '';

    let i = 0;

    setInterval(() => {
      if(i < header.length) {
        headerSentence += header[i];
        this.setState({heroHeader: headerSentence});
        i++;
      }
    }, 75);
  }

  render() {
    return (
      <section className="hero" id="home">
        <h1 className="hero__header">
          {this.state.heroHeader}
        </h1>
        <p className="hero__scroll">
          Scroll to see some of my work.
        </p>
      </section>
    );
  }
}

export default Hero;