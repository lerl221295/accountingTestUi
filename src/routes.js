import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store';

// VIEW COMPONENTS:
import Transactions from './containers/Transactions';

const routes = (
  <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Transactions} />
      </Switch>
  </ConnectedRouter>
);

export default routes;
