import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import transactionsReducer from './containers/Transactions/reducer';

import serviceConfigs from './services/reducer';

const containersReducer = {
  containers: combineReducers({
    transactionsReducer
  })
};

const createGlobalReducer = (history) => (
  combineReducers({
    ...containersReducer,
    serviceConfigs,
    router: connectRouter(history)
  })
);

export default createGlobalReducer;
