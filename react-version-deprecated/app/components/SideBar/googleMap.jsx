import React from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

/* Google maps implementation, you could style map using setups from
   https://snazzymaps.com/style/15/subtle-grayscale
   just put them into the mapStyles.json file.
 */
class GoogleMapContainer extends React.Component {
  static defaultProps = {
    data: {
      location: {
        coordinates: []
      }
    },
    loaded: false
  }

  render() {
    console.log('GoogleMapContainer:', this.props);
    if (this.props.loaded !== true) {
      return (<div style={{ margin: '20 auto'}}>loading...</div>);
    }
    const containerStyle = {
      height: '100%',
      width: '100%',
      margin: '0 auto'
    };
    const containerElement = (<div style={containerStyle}></div>);

    const position = {
      lat: this.props.data.location.coordinates[0],
      lng: this.props.data.location.coordinates[1]
    };
    console.log('rendering...', position);
    const marker = (<Marker position={position} key="location" />);
    const googleMap = (
      <GoogleMap ref="map"
                 defaultZoom={8}
                 defaultCenter={position}
                 defaultOptions={{ styles: require('json!./mapStyles.json') }}>
        {marker}
      </GoogleMap>
    );
    return (
      <GoogleMapLoader containerElement={containerElement}
                       googleMapElement={googleMap}>
      </GoogleMapLoader>
    );
  }
}

function stateToProps(state) {
  return {
    loaded: state.propertyDetails.get('loaded'),
    data: state.propertyDetails.toJS().data.data
  };
}

export default connect(stateToProps)(GoogleMapContainer);
