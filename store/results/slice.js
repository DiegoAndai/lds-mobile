import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'results',
  initialState: {
    results: [
      { concept: 'Perro', video: 'url_video_perro'},
      { concept: 'Gato', video: 'url_video_gato'},
      { concept: 'Ratón', video: 'url_video_ratón'},
    ],
    error: null,
  },
  reducers: {
    fetchResults(state) {
      state.error = null;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
    fetchResultsRejected(state, action) {
      state.error = action.payload;
    },
  },
});

const selectResultById = createSelector(
  state => state.results.results,
  (_, resultId) => resultId,
  (results, resultId) => {

    return results[resultId];
  },
);

export default slice;
export const actions = slice.actions;
export const selectors = {
  selectResultById,
};
