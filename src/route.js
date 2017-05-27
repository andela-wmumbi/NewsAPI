import React from 'react';
import { Route } from 'react-router';
import Articles from './components/Articles';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <Route path="/articles/:source_id/:sortBy" component={Articles} />
  </Route>
);
