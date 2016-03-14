/* eslint-env es6 */
/* eslint indent: [2, 2, {SwitchCase: 0}] */
/* reducers and actions for properties */
import Immutable from 'immutable';
import { CALL_API } from 'redux-api-middleware';
import config from '../../config';

export const PROPERTY_DETAILS_REQUEST = 'property/DETAILS_REQUEST';
export const PROPERTY_DETAILS_SUCCESS = 'property/DETAILS_SUCCESS';
export const PROPERTY_DETAILS_FAILURE = 'property/DETAILS_FAILURE';

export const PROPERTY_REQUEST_FORM_REQUEST = 'property/REQUEST_FORM_REQUEST';
export const PROPERTY_REQUEST_FORM_SUCCESS = 'property/REQUEST_FORM_SUCCESS';
export const PROPERTY_REQUEST_FORM_FAILURE = 'property/REQUEST_FORM_FAILURE';

const initialState = Immutable.Map({
  loading: false,
  loaded: false,
  data: {},
  error: null
});

export function sendPropertyDetailsRequest(data) {
  const apiPrefix = config.getIn(['API'], 'prefix');
  return {
    [CALL_API]: {
      endpoint: `${apiPrefix}/messages`,
      method: 'POST',
      body: data,
      headers: { 'Content-Type': 'application/json' },
      types: [
        PROPERTY_REQUEST_FORM_REQUEST,
        PROPERTY_REQUEST_FORM_SUCCESS,
        PROPERTY_REQUEST_FORM_FAILURE
      ]
    }
  };
}

export function getRelaedProperties(state, sity) {
  console.log('When API will up');
}

export function getPropertyDetails(id) {
  const apiPrefix = config.getIn(['API', 'prefix']);
  // maybe fetch?
  // fetch(`$(apiPrefix)/${id}`).then(
  //   success => { type: PROPERTY_DETAILS_SUCCESS, meta: { loading: true}},
  //   error => dispatch(routeActions.push('/error'))
  // );
  return {
    [CALL_API]: {
      endpoint: `${apiPrefix}/${id}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        {
          type: PROPERTY_DETAILS_REQUEST,
          meta: { loading: true }
        },
        {
          type: PROPERTY_DETAILS_SUCCESS,
          meta: { loading: false, loaded: true }
        },
        {
          type: PROPERTY_DETAILS_FAILURE,
          meta: (action, state, res) => {
            if (res) {
              // return (dispatch, getState) => {
              //   console.log('Get property failed:', getState());
              //   return dispatch(routeActions.push('/error'));
              return {
                loaded: false,
                loading: false,
                status: res.status,
                statusText: res.statusText
              };
            } else {
              return {
                loded: false,
                loading: false,
                status: 'Network request failed'
              };
            }
          }
        }
      ]
    }
  };
}

export default function propertyDetailsReducer(state = initialState, action) {
  switch (action.type) {
  case PROPERTY_DETAILS_REQUEST:
    return state.set('loading', action.meta.loading);
  case PROPERTY_DETAILS_FAILURE:
    return state.set(
      'error', action.payload).set('loading', false);
  case PROPERTY_DETAILS_SUCCESS:
    return state.set(
      'loading', action.meta.loading).set(
        'loaded', action.meta.loaded).set('data', action.payload);
  case PROPERTY_REQUEST_FORM_REQUEST:
    return state;
  case PROPERTY_REQUEST_FORM_FAILURE:
    return state;
  case PROPERTY_REQUEST_FORM_SUCCESS:
    return state;
  default:
    return state;
  };
}
