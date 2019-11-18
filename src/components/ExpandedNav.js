import React, {Component} from 'react';

import '../layout/components/expanded-nav.sass';

class ExpandedNav extends Component {
  render() {
    return (
      <div className="expanded-nav">
        <div className="expanded-nav__background"></div>
        <div className="expanded-nav__links">
          <a className="expanded-nav__link">
            Home
          </a>
          <a className="expanded-nav__link">
            Defi Accelerator
          </a>
          <a className="expanded-nav__link">
            Compound Data
          </a>
          <a className="expanded-nav__link">
            CSS Bundle
          </a>
          <a className="expanded-nav__link">
            About Me
          </a>
        </div>
      </div>
    );
  }
}

export default ExpandedNav;