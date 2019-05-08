export const selectTransactionsContainer = (state) => state.containers.transactionsReducer;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectApiData = (state) => selectTransactionsContainer(state).get('apiData');
export const selectApiDataError = (state) => selectTransactionsContainer(state).get('apiDataError');
export const selectApiDataLoading = (state) => selectTransactionsContainer(state).get('apiDataLoading');
export const selectApiDataLoaded = (state) => selectTransactionsContainer(state).get('apiDataLoaded');



