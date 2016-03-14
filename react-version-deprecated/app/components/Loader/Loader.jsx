import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './loader.css';

class Loader extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }
}

export default CSSModules(Loader, styles);
