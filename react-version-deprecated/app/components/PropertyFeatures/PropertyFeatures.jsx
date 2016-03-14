/* eslint-disable camelcase */
import React from 'react';

class PropertyFeatures extends React.Component {
  static defaultProps = {
    data: {
      meta: {
        __repr: {}
      },
      details: {
        bedrooms: 0,
        other_rooms: 0
      }
    }
  }

  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  buildFeatures() {
    const { features } = this.props.data.details;
    const featureFactory = (feature) => {
      return feature.map(
        (item, index) => {
          return (<li key={index}>{this.capitalize(item)}</li>);
        }
      );
    };
    return {
      basement: featureFactory(features.basement),
      interior: featureFactory(features.interior),
      exterior: featureFactory(features.exterior),
      building: featureFactory(features.building),
      accessibility: featureFactory(features.accessibility),
      garageParking: featureFactory(features.garage_parking),
      heatingCooling: featureFactory(features.heating_cooling),
      utilities: featureFactory(features.utilities),
      appliances: featureFactory(features.appliances),
      amenities: featureFactory(features.amenities),
      farm: featureFactory(features.farm)
    };
  }

  render() {
    console.log('PropertyFeatures:', this.props);
    const roomsTotal = (this.props.data.details.bedrooms +
                        this.props.data.details.other_rooms);
    const features = this.buildFeatures.bind(this)();
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">Features</h4>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <h4 className="subsection-header">Other Rooms</h4>
              <ul>
                <li>Rooms Total: {roomsTotal}</li>
                {features.basement}
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="subsection-header">Interior Features</h4>
              <ul>
                {features.interior}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="subsection-header">Exterior &amp; Lot Features</h4>
              <ul>
                {features.exterior}
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="subsection-header">Building &amp; Construction</h4>
              <ul>
                {features.building}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="subsection-header">Accessiblity Features</h4>
              <ul>
                {features.accessibility}
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="subsection-header">Garage &amp; Parking</h4>
              <ul>
                {features.garageParking}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="subsection-header">Heating &amp; Cooling</h4>
              <ul>
                {features.heatingCooling}
              </ul>
            </div>
           <div className="col-md-6">
              <h4 className="subsection-header">Utilities</h4>
              <ul>
                {features.utilities}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="subsection-header">Appliances</h4>
              <ul>
                {features.appliances}
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="subsection-header">
                Amenities &amp; Community Features
              </h4>
              <ul>
                {features.amenities}
              </ul>
            </div>
          </div>
          <div className="row">
           <div className="col-md-6">
              <h4 className="subsection-header">Farm Info</h4>
              <ul>
                {features.farm}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyFeatures;
