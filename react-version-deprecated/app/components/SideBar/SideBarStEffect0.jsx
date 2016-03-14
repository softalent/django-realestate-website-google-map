/* eslint-disable dot-notation, quote-props */
import React from 'react';
import { connect } from 'react-redux';
import GoogleMapContainer from './googleMap.jsx';
import { capitalizeFirstAllWords } from '../../utils/capitalize';

/*
 *  Sidebar component with st-effect-1 (set on the toggle button within the navbar)
 */
class SideBarEffect0 extends React.Component {
  static defaultProps = {
    data: {
      price: {
        total: 0
      },
      location: {
        address: ''
      }
    },
    meta: {
      '__repr': {
        price: {
          '__prefix': ''
        }
      }
    }
  }

  render() {
    console.log('SideBarEffect0->props:', this.props);
    return (
      <aside className="sidebar right sidebar-size-xs-1 sidebar-size-lg-25pc
                        sidebar-size-30pc sidebar-offset-0
                        sidebar-skin-white sidebar-visible-desktop"
             id="sidebar-property">
        <div className="split-vertical">

          <div className="sidebar-block equal-padding text-center">
            <h3>
              <i className="fa fa-sm fa-tag"></i>
              {this.props.meta['__repr'].price['__prefix']}
              {this.props.data.price.total.toLocaleString()}
            </h3>
            <p>
              Want to see{' '}
              {capitalizeFirstAllWords(this.props.data.location.address)}
              {' '}today?
              Click the button below and
              See This Property will connect you with a local realtor!
            </p>
            <a href="#sidebar-agent" className="btn btn-primary"
               data-toggle="sidebar-menu"> See This Property</a>
          </div>

          <div className="split-vertical-body">
            <div className="split-vertical-cell">
              <div data-scrollable>

                <div id="google-fs-realestate"
                     className="maps-google-fs">
                  <GoogleMapContainer />
                </div>

              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

function stateToProps(state) {
  return {
    loaded: state.propertyDetails.get('loaded'),
    meta: state.propertyDetails.toJS().data.meta,
    data: state.propertyDetails.toJS().data.data
  };
}

export default connect(stateToProps)(SideBarEffect0);
