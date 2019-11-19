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
          <h2 className="project__header">
            {this.props.header}
          </h2>
          <p className="project__description">
            {this.props.description}
          </p>
        </div>
        {/* Change this to an image */}
        <img 
          className="project__image" 
          src={this.props.image} 
          alt={this.props.header} 
        />
        <div className="project__image-background"></div>
      </section>
    );
  }
}

export default Project;