import React from 'react';

class PropertyMeta extends React.Component {
  static defaultProps = {
    data: {
      details: {
        size: {
          house: 0,
          lot: 0
        },
        style: '',
        badrooms: 0,
        bathrooms: {
          full: 0,
          half: 0
        }
      }
    }
  }

  render() {
    console.log('PropertyMeta:', this.props);
    return (
      <div className="property-meta">
        <ul>
          <li className="property-meta-item"
              style={{ textTransform: 'capitalize' }}>
            <i className="fa fa-fw icon icon-home-2"></i>{' '}
            {this.props.data.details.type}
          </li>
          <li className="property-meta-item">
            <i className="fa fa-fw icon icon-bed"></i>{' '}
            {this.props.data.details.bedrooms} Bedrooms
          </li>
          <li className="property-meta-item">
            <i className="fa fa-fw icon icon-toilet"></i>{' '}
            {this.props.data.details.bathrooms.full} Full{', '}
            {this.props.data.details.bathrooms.half} Half Bathroom
          </li>
          <li className="property-meta-item">
            <i className="fa fa-fw icon fa-arrows"></i>{' '}
            {this.props.data.details.size.house} sq ft |
            {this.props.data.details.size.lot} sq ft lot
          </li>
        </ul>
      </div>
    );
  }
}

export default PropertyMeta;
