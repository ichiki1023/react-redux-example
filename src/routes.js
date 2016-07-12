import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/App/App';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
