import React from 'react';
import ReactDOM from 'react-dom';

import routes from './config/routes';
import Main from './components/Main';//not sure we need this, to be deleted

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById('app'));
