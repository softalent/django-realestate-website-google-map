import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
// application reducers
import propertyDetailsReducer from './modules/property';

export default combineReducers({
  routing: routeReducer,
  propertyDetails: propertyDetailsReducer
});
