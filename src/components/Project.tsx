import React, {Component} from 'react';
import "../utils/installGsap.js";
import {ScrollScene} from 'scrollscene';
import {TimelineMax} from 'gsap';

import github from '../images/github.png';

import '../layout/components/project.sass';

interface ProjectProps {
  index: number;
  id: string;
  link: string;
  header: string;
  description: string;
  image: string;
  githubLink: string;
}

class Project extends Component<ProjectProps> {
  private projectHeadings_: HTMLElement[];
  private projectImages_: HTMLElement[];
  private project_: HTMLElement;

  private timeline0_: TimelineMax;
  private timeline1_: TimelineMax;
  private timeline2_: TimelineMax;
  private timeline3_: TimelineMax;
  private timeline4_: TimelineMax;
  private timeline5_: TimelineMax;
  private timeline6_: TimelineMax;
  private timeline7_: TimelineMax;
  private timeline8_: TimelineMax;
  private timeline9_: TimelineMax;
  private timeline10_: TimelineMax;
  private timeline11_: TimelineMax;
  private timelines_: TimelineMax[];

  componentDidMount = async (): Promise<void> => {
    this.projectHeadings_ = Array.from(document.querySelectorAll('.project__heading'));
    this.projectImages_ = Array.from(document.querySelectorAll('.project__image'));
    this.project_ = document.querySelector('.project');

    this.timeline0_ = new TimelineMax({paused: true});
    this.timeline1_ = new TimelineMax({paused: true});
    this.timeline2_ = new TimelineMax({paused: true});
    this.timeline3_ = new TimelineMax({paused: true});
    this.timeline4_ = new TimelineMax({paused: true});
    this.timeline5_ = new TimelineMax({paused: true});
    this.timeline6_ = new TimelineMax({paused: true});
    this.timeline7_ = new TimelineMax({paused: true});
    this.timeline8_ = new TimelineMax({paused: true});
    this.timeline9_ = new TimelineMax({paused: true});
    this.timeline10_ = new TimelineMax({paused: true});
    this.timeline11_ = new TimelineMax({paused: true});
    this.timelines_ = [
      this.timeline0_, 
      this.timeline1_, 
      this.timeline2_, 
      this.timeline3_, 
      this.timeline4_, 
      this.timeline5_, 
      this.timeline6_, 
      this.timeline7_, 
      this.timeline8_, 
      this.timeline9_, 
      this.timeline10_, 
      this.timeline11_
    ];

    this.tweenHeadings();
    this.tweenImages();
  }

  tweenHeadings = (): void => {
    this.projectHeadings_.forEach((heading, i) => {
      this.timelines_[i].fromTo(heading, 1, {x: 300, opacity: 0}, {x: 0, opacity: 1});

      new ScrollScene({
        triggerElement: `.project--${i}`,
        triggerHook: 'onLeave',
        duration: '60%',
        breakpoints: {0: false, 1024: true},
        gsap: {
          timeline: this.timelines_[i]
        }
      });

      this.timelines_[i + 3].fromTo(heading, 1, {x: 0, opacity: 0}, {x: 0, opacity: 1});

      new ScrollScene({
        triggerElement: `.project--${i}`,
        triggerHook: 'onCenter',
        duration: '50%',
        breakpoints: {0: true, 1024: false},
        gsap: {
          timeline: this.timelines_[i + 3]
        }
      });
    });
  }

  tweenImages = (): void => {
    this.projectImages_.forEach((image, i) => {
      this.timelines_[i + 6].fromTo(image, 1, {opacity: 0}, {opacity: 1});

      new ScrollScene({
        triggerElement: `.project--${i}`,
        triggerHook: 'onLeave',
        duration: '60%',
        breakpoints: {0: false, 1024: true},
        gsap: {
          timeline: this.timelines_[i + 6]
        }
      });

      this.timelines_[i + 9].fromTo(image, 1, {opacity: 0}, {opacity: 1});

      new ScrollScene({
        triggerElement: `.project--${i}`,
        triggerHook: 'onCenter',
        duration: '50%',
        breakpoints: {0: true, 1024: false},
        gsap: {
          timeline: this.timelines_[i + 9]
        }
      });
    });
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
          <a href={this.props.githubLink} className="project__github-link">
            <img src={github} alt="Github" className="project__github" />
          </a>
        </div>
        <a 
          href={this.props.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="project__image-link"
        >
          <img 
            className={"project__image project__image--" + this.props.index} 
            src={this.props.image} 
            alt={this.props.header} 
          />
        </a>
      </section>
    );
  }
}

export default Project;