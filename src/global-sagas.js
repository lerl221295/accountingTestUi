import { fork, all } from 'redux-saga/effects';

import TransactionsSagas from './containers/Transactions/sagas';

const sagas = [
  TransactionsSagas
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
