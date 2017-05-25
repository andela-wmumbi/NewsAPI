import React from 'react';
import { Route } from 'react-router';
import Articles from './components/Articles';
import ApiCalls from './components/Api';

export default (
  <Route path="/" component={ApiCalls}>
    <Route path="/articles/:source_id" component={Articles} />
  </Route>
);
