import React, {Component} from 'react';
import {ScrollScene} from 'scrollscene';
import {TimelineMax} from 'gsap';

import '../layout/components/project.sass';

interface ProjectProps {
  index: number;
  id: string;
  link: string;
  header: string;
  description: string;
  image: string;
}

class Project extends Component<ProjectProps> {
  private projectHeadings_: HTMLElement[];
  private timeline0_: TimelineMax;
  private timeline1_: TimelineMax;
  private timeline2_: TimelineMax;

  componentDidMount = (): void => {
    this.projectHeadings_ = Array.from(document.querySelectorAll('.project__heading'));
    this.timeline0_ = new TimelineMax({onUpdate: this.updatePercentage, paused: true});
    this.timeline1_ = new TimelineMax({onUpdate: this.updatePercentage, paused: true});
    this.timeline2_ = new TimelineMax({onUpdate: this.updatePercentage, paused: true});

    this.tweenHeadings();
  }

  tweenHeadings = (): void => {
    this.timeline0_.fromTo('.project__heading--0', 1, {x: 300, opacity: 0}, {x: 0, opacity: 1});

    new ScrollScene({
      triggerElement: '.project--0',
      triggerHook: 'onLeave',
      duration: '40%',
      gsap: {
        timeline: this.timeline0_
      }
    });

    this.timeline1_.fromTo('.project__heading--1', 1, {x: 300, opacity: 0}, {x: 0, opacity: 1});

    new ScrollScene({
      triggerElement: '.project--1',
      triggerHook: 'onLeave',
      duration: '40%',
      gsap: {
        timeline: this.timeline1_
      }
    });

    this.timeline2_.fromTo('.project__heading--2', 1, {x: 300, opacity: 0}, {x: 0, opacity: 1});

    new ScrollScene({
      triggerElement: '.project--2',
      triggerHook: 'onLeave',
      duration: '40%',
      gsap: {
        timeline: this.timeline2_
      }
    });
  }

  updatePercentage = (): void => {
    this.timeline0_.progress();
    console.log(this.timeline0_.progress());
    this.timeline1_.progress();
    console.log(this.timeline1_.progress());
    this.timeline2_.progress();
    console.log(this.timeline2_.progress());
  }
  
  render() {
    return (
      <section 
        className={"project project--" + this.props.index}
        id={this.props.id}
      >
        <div className={"project__heading project__heading--" + this.props.index}>
          <a 
            href={this.props.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="project__header"
          >
            <h2 className="project__header">
              {this.props.header}
            </h2>
          </a>
          <p className="project__description">
            {this.props.description}
          </p>
        </div>
        <a 
          href={this.props.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="project__image-link"
        >
          <img 
            className="project__image" 
            src={this.props.image} 
            alt={this.props.header} 
          />
        </a>
      </section>
    );
  }
}

export default Project;