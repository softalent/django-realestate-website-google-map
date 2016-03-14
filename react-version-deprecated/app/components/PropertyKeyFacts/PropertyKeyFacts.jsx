import React from 'react';

class PropertyKeyFacts extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">Key Facts</h4>
        </div>
        <div className="panel-body">
          <div className="row">
            <ul>
              <li>Style: Cape Cod</li>
              <li>Type: Single Family Home</li>
              <li>Year built: 1930</li>
              <li>Price/Sq ft: $125</li>
              <li>Bedrooms: 3</li>
              <li>Bathrooms: 1 full, 1 half</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyKeyFacts;
