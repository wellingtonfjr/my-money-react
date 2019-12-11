import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import BillingCycle from '../billingCycles/billingCycle'
import Dashboard from '../dashboard/Dashboard'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Redirect from='*' to='/' />
  </Router>
)
