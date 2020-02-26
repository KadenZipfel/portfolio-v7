import React, {Component} from 'react';

import '../layout/components/expanded-nav.sass';

class ExpandedNav extends Component {
  render() {
    return (
      <div className="expanded-nav">
        <div className="expanded-nav__background"></div>
        <div className="expanded-nav__links">
          <a className="expanded-nav__link" href="#home">
            Home
          </a>
          <a className="expanded-nav__link" href="#defi-accelerator">
            Defi Accelerator
          </a>
          <a className="expanded-nav__link" href="#compound-data">
            Compound Data
          </a>
          <a className="expanded-nav__link" href="#ethereum">
            Ethereum
          </a>
          <a className="expanded-nav__link" href="#about">
            About Me
          </a>
        </div>
      </div>
    );
  }
}

export default ExpandedNav;