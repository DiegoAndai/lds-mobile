import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import sagas from './sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [saga],
});

export function runSagas() {
  saga.run(sagas);
}
