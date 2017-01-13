import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';
import Comments from '../components/subreddit/Comments.jsx';

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
			<Route path="/:topic" component={Listing} />
        <Route path="/find/:topic" component={Comments} />
			<IndexRoute component={Listing} />
    </Route>
  </Router>
);


