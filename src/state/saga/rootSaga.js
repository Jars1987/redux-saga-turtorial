import { takeLatest } from 'redux-saga/effects';
import handleGetJoke from './handlers/joke';

//hour watcher function will be watching for any redux actions thar are going to be dispatched
export function* watcherSaga() {
  yield takeLatest('get_joke', handleGetJoke);
}
