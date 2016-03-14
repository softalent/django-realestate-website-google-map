/* eslint-env browser, node */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router, Route,
  IndexRoute, hashHistory
} from 'react-router';
import { Provider } from 'react-redux';
import createStore from './redux/create';
// Application containers
import App from './containers/App.jsx';
import Home from './containers/Home.jsx';
import PropertyDetails from './containers/PropertyDetails.jsx';
import NoMatch from './containers/NoMatch.jsx';

let store = createStore(hashHistory, window.__data);
const DevTools = require('./containers/DevTools.jsx').default;

ReactDOM.render(
  <Provider store={store} key="provider">
    <div className="st-content-inner padding-top-none">
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/:id/:state/:city/:address" component={PropertyDetails} />
          <Route path="*" component={NoMatch} status={404} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>, document.getElementById('app')
);
