import React from 'react';
import {
  RelatedProperties
} from '../components';

class NoMatch extends React.Component {
  render() {
    return (
      <div className="st-content-inner padding-top-none" id="content">
        <h1>Nothing found</h1>
        <div className="container-fluid">
          <RelatedProperties />
        </div>
      </div>
    );
  }
}

export default NoMatch;
