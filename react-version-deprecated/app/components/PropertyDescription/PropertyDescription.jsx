import React from 'react';

class PropertyDescription extends React.Component {
  static defaultProps = {
    data: {
      details: {
        overview: ''
      }
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">Description</h4>
        </div>
        <div className="panel-body">
          <div>
              <p>{this.props.data.details.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyDescription;
