import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import BillingCycles from '../billingCycles/billingCycles'
import Dashboard from '../dashboard/Dashboard'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCycles} />
    <Redirect from='*' to='/' />
  </Router>
)
