import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPIDataLoaded, getAPIDataError } from './actions';

import {
  GET_API_DATA
} from './constants';

import BackendService from '../../services/BackendService';

function* getApiData() {

  try {
    const { result, error } = yield call(BackendService.getData);

    if (!result || error) {

      return yield put(getAPIDataError(error));
    }

    return yield put(getAPIDataLoaded(result));

  } catch (error) {

    return yield put(getAPIDataError(error));
  }
}

function* apiData() {
  yield takeLatest(GET_API_DATA, getApiData);
}

export default apiData;
