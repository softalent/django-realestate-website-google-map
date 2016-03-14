import React from 'react';
import {
  Carousel, PropertyMeta, PropertyDescription, PropertyFeatures,
  PropertySchools, RelatedProperties, Loader
} from '../components';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import {
  getPropertyDetails
} from '../redux/modules/property';
import Helmet from 'react-helmet';

class PropertyDetails extends React.Component {
  componentWillMount() {
    // dispatch redux event to load data from the API endpoint
    const { id } = this.props.params;
    this.props.dispatch(getPropertyDetails(id));
  }

  render() {
    console.log('PropertyDetails:', this.props);

    // if API returned error (better to do it onEnter in router)
    if (this.props.propertyDetails.error) {
      this.props.dispatch(routeActions.push('/error'));
      return ('');
    }
    if (this.props.propertyDetails.loaded === true) {
      if (this.props.propertyDetails.data.meta.code === 200) {
        return (
          <div className="st-content-inner padding-top-none" id="content">
            {/* Use helmet to set page header attributes if required */}
            <Helmet
                title={this.props.propertyDetails.data.data.location.address}
            />
            <Carousel data={this.props.propertyDetails.data.data}
                      meta={this.props.propertyDetails.data.meta} />
            <PropertyMeta data={this.props.propertyDetails.data.data}
                          link={this.props.propertyDetails.data.links}
                          meta={this.props.propertyDetails.data.meta}
            />
            <div className="container-fluid">
              <PropertyDescription
                  data={this.props.propertyDetails.data.data} />
              <PropertyFeatures data={this.props.propertyDetails.data.data} />
              <PropertySchools data={this.props.propertyDetails.data} />
              <RelatedProperties />
            </div>
          </div>
        );
      }
    }
    return (<div style={{ margin: [0, 'auto'] }}><Loader /></div>);
  }
}

function stateToProps(state) {
  return {
    propertyDetails: state.propertyDetails.toJS()
  };
}

export default connect(stateToProps)(PropertyDetails);
