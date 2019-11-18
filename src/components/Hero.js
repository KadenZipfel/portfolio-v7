import React, {Component} from 'react';

import '../layout/components/hero.sass';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroHeader: '',
      heroScroll: ''
    }
  }

  componentDidMount = () => {
    this.typewriter();
  }

  typewriter = () => {
    const header = "Hi, I'm Kaden.";
    const scroll = "Scroll to see some of my work.";

    let headerSentence = '';
    let scrollSentence = '';

    let i = 0;

    setInterval(() => {
      if(i < header.length) {
        headerSentence += header[i];
        this.setState({heroHeader: headerSentence});
        i++;
      }
      
      if(i >= header.length && i < scroll.length + header.length) {
        scrollSentence += scroll[i - header.length];
        this.setState({heroScroll: scrollSentence});
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
          {this.state.heroScroll}
        </p>
      </section>
    );
  }
}

export default Hero;