import { spawn } from 'redux-saga/effects';

import fetchResultsSaga from './sagas/fetch-results';

export default function *resultsSaga() {
  yield spawn(fetchResultsSaga);
}
