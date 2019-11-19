import React, {Component} from 'react';

import '../layout/components/project.sass';

class Project extends Component {
  render() {
    return (
      <section 
        className={"project project--" + this.props.index}
        id={this.props.id}
      >
        <div className="project__heading">
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
        >
          <img 
            className="project__image" 
            src={this.props.image} 
            alt={this.props.header} 
          />
        </a>
        <div className="project__image-background"></div>
      </section>
    );
  }
}

export default Project;