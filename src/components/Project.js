import React, {Component} from 'react';

import '../layout/components/project.sass';

class Project extends Component {
  render() {
    return (
      <section className="project" id={this.props.id}>
        <h2 className="project__header">
          {this.props.header}
        </h2>
        <p className="project__description">
          {this.props.description}
        </p>
        {/* Change this to an image */}
        <div className="project__image"></div>
        <div className="project__image-background"></div>
      </section>
    );
  }
}

export default Project;