import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';

import TabReducer from '../common/tab/tabReducers';
import BillingCycleReducers from '../billingCycles/billingCycleReducers';



const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducers
})

export default rootReducers;