import { spawn } from 'redux-saga/effects';

import resultsSaga from './results/saga';

export default function *rootSaga() {
  yield spawn(resultsSaga);
}
