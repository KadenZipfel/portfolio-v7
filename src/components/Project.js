import React, {Component} from 'react';

import '../layout/components/project.sass';

class Project extends Component {
  componentDidMount = () => {
    this.fadeInElements();
  }
  
  fadeInElements = () => {
    const wrapper = document.querySelector('.outer-wrapper');
    const headers = document.querySelectorAll('.project__heading');
    const images = document.querySelectorAll('.project__image');
    const imageBackgrounds = 
      document.querySelectorAll('.project__image-background');

    wrapper.onscroll = () => {
      const width = window.innerWidth;
      const range = (width / 4) * 3;

      headers.forEach((header) => {
        const left = header.getBoundingClientRect().left;
        if(left < range) {
          header.classList.add('active')
        }
      });

      images.forEach((image) => {
        const left = image.getBoundingClientRect().left;
        if(left < range) {
          image.classList.add('active')
        }
      });

      imageBackgrounds.forEach((background) => {
        const left = background.getBoundingClientRect().left;
        if(left < range) {
          background.classList.add('active')
        }
      });
    }
  } 

  render() {
    return (
      <section className="project" id={this.props.id}>
        <div className="project__heading">
          <h2 className="project__header">
            {this.props.header}
          </h2>
          <p className="project__description">
            {this.props.description}
          </p>
        </div>
        {/* Change this to an image */}
        <div className="project__image"></div>
        <div className="project__image-background"></div>
      </section>
    );
  }
}

export default Project;