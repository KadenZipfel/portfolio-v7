import React, {Component} from 'react';

import '../layout/components/about.sass';

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <h2 className="about__header">
          About Me
        </h2>
        <hr className="about__hr" />
        <p className="about__paragraph">
          I am a front-end developer specializing in React, with 
          experience building full-stack applications and marketing 
          pages. With my background in design, I have an eye for 
          detail that allows me to continuously perfect my work.
        </p>
        <p className="about__paragraph">
          My passion for open source software has given me experience 
          in a large array of diverse programming environments, whilst 
          greatly refining my knowledge of Git. By working on a large 
          variety of projects, I have become comfortable efficiently 
          learning new programming frameworks and paradigms.
        </p>
        <p className="about__paragraph">
          Along my ongoing search for knowledge, I have learned the 
          importance of several programming paradigms including 
          functional vs. object oriented programming and error 
          driven vs. test driven development. I have also built 
          confidence in several languages and frameworks such as: 
          React, Typescript, Node, Express and Sass.
        </p>
        <p className="about__paragraph">
          I am currently in search of a full-time position where I 
          have the opportunity to work in a collaborative environment 
          in which I can continuously grow as both a developer and a person.
        </p>
      </section>
    );
  }
}

export default About;