import React, {Component} from 'react';
import {ScrollScene} from 'scrollscene';
import {TimelineMax} from 'gsap';

import '../layout/components/hero.sass';

interface HeroState {
  heroHeader: string;
}

class Hero extends Component<{}, HeroState> {
  private timeline6_: TimelineMax;

  constructor(props) {
    super(props);
    this.state = {
      heroHeader: ''
    }
  }

  componentDidMount = (): void => {
    this.timeline6_ = new TimelineMax({paused: true});
    this.tweenHero();

    setTimeout(() => {
      this.typewriter();
    }, 500);
  }

  tweenHero = (): void => {
    this.timeline6_.fromTo('.hero__heading', 1, {opacity: 1, scale: 1}, {opacity: 0, scale: 0});

    new ScrollScene({
      triggerElement: '.hero',
      triggerHook: 'onLeave',
      duration: '100%',
      gsap: {
        timeline: this.timeline6_
      }
    });
  }

  typewriter = (): void => {
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
        <div className="hero__heading">
          <h1 className="hero__header">
            {this.state.heroHeader}
          </h1>
          <p className="hero__scroll">
            Scroll to see some of my work.
          </p>
        </div>
      </section>
    );
  }
}

export default Hero;