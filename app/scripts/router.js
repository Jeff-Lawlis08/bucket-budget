import {Router, Route, browserHistory} from 'react-router';
import React from 'react';

import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Nav}>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Route>
  </Router>
);
export default router;
