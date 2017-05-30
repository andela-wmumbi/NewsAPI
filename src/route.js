import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Articles from './components/Articles';
import App from './components/App';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Articles} />
      <Route path="/articles/:source_id/:sortBy" component={Articles} />
    </Route>
  </Router>
);
