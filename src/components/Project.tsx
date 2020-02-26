import React, {Component} from 'react';

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
  projectHeadings_: HTMLElement[];

  componentDidMount = () => {
    this.projectHeadings_ = Array.from(document.querySelectorAll('.project__heading'));

    this.fadeHeadings();
  }

  fadeHeadings = () => {
    window.onscroll = () => {
      this.projectHeadings_.forEach((heading) => {
        if(heading.getBoundingClientRect().top < 170) {
          heading.classList.add('active');
        }
      });
    }
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