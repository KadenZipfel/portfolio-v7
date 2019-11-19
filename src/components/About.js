import React, {Component} from 'react';

import '../layout/components/about.sass';

import about from '../images/about.jpg';

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        {/* Change this to an image */}
        <img className="about__image" src={about} alt="About Me" />
        <div className="about__image-background"></div>
        <div className="about__text">
          <h2 className="about__header">
            About Me
          </h2>
          <hr className="about__hr" />
          <p className="about__paragraph">
            I have experience with many popular front end frameworks,
            e.g. Angular, Vue, React - but my bread and butter is
            React.
          </p>
          <p className="about__paragraph">
            The only thing I like more than Javascript is Typescript.
          </p>
          <p className="about__paragraph">
            Of course I’m very comfortable with Git and Sass.
          </p>
          <p className="about__paragraph">
            I can write tests in Mocha, Chai, Jest, or whatever else 
            you throw at me.
          </p>
          <p className="about__paragraph">            
            I have experience working on small client marketing 
            pages, full-stack applications, and a few big budget 
            marketing pages
          </p>
          <p className="about__paragraph">
            I also love to contribute to projects that excite me, 
            either by meticulously searching for problems, or 
            suggesting improvements. 
          </p>
          <p className="about__paragraph">
            I like to spend my free time running, weightlifting, 
            practicing jiu jitsu, working on personal projects, or 
            hanging out with my girlfriend.
          </p>
        </div>
      </section>
    );
  }
}

export default About;