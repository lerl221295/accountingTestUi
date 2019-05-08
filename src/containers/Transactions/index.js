import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TransactionsComponent from '../../components/Transactions';

import {
  getAPIData
} from './actions';

import {
  selectApiData,
  selectApiDataError,
  selectApiDataLoading,
  selectApiDataLoaded
} from './selectors';

import './style.scss';


/**
 * Representa el componente Transactions
 *
 * @class Transactions
 * @extends {React.Component}
 */
export class Transactions extends Component {

  componentDidMount() {
    const { getAPIData } = this.props;

    getAPIData();
  }

  render() {
    const {
     apiData, apiDataError, loading, loaded
    } = this.props;

    return (
      <TransactionsComponent 
        data={apiData} 
        error={apiDataError}
        loading={loading}
        loaded={loaded}
      />);
  }
}

Transactions.defaultProps = {
  apiData: {loading: true},
  apiDataError: {loading: true}
};

Transactions.propTypes = {
  getAPIData: PropTypes.func.isRequired,
  apiData: PropTypes.array,
  apiDataError: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  apiData: selectApiData(state),
  apiDataError: selectApiDataError(state),
  loading: selectApiDataLoading(state),
  loaded: selectApiDataLoaded(state)
});

export default connect(mapStateToProps, {getAPIData})(Transactions);
