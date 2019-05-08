import { fromJS } from 'immutable';

const env = window.AppENV || {};

const initialState = fromJS({
  ...env,
  appConf: window.appConf || {}
});

function serviceConfigs(state = initialState) {
  // static configs
  return state;
}

export default serviceConfigs;
