import React, {Component} from 'react';

import '../layout/components/project.sass';

class Project extends Component {
  render() {
    return (
      <section className="project">
        <h2 className="project__header">
          {this.props.header}
        </h2>
        <p className="project__description">
          {this.props.description}
        </p>
      </section>
    );
  }
}

export default Project;