import { takeLatest } from 'redux-saga/effects';

function *fetchResults(payload) {
  console.log(payload)
}

export default function *fetchResultsSaga() {
  yield takeLatest('results/fetchResults', fetchResults);
}
