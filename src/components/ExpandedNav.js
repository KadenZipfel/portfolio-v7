import React, {Component} from 'react';

import '../layout/components/expanded-nav.sass';

class ExpandedNav extends Component {
  render() {
    return (
      <div className="expanded-nav">
        <div className="expanded-nav__background"></div>
        <div className="expanded-nav__links">
          <a className="expanded-nav__link" href="#home" onClick={this.props.handleNavClick}>
            Home
          </a>
          <a className="expanded-nav__link" href="#defi-accelerator" onClick={this.props.handleNavClick}>
            Defi Accelerator
          </a>
          <a className="expanded-nav__link" href="#compound-data" onClick={this.props.handleNavClick}>
            Compound Data
          </a>
          <a className="expanded-nav__link" href="#css-bundle" onClick={this.props.handleNavClick}>
            CSS Bundle
          </a>
          <a className="expanded-nav__link" href="#about" onClick={this.props.handleNavClick}>
            About Me
          </a>
        </div>
      </div>
    );
  }
}

export default ExpandedNav;