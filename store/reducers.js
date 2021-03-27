import { combineReducers } from '@reduxjs/toolkit';

import resultsSlice from './results/slice';

const reducers = combineReducers({
  results: resultsSlice.reducer,
});

export default reducers;
