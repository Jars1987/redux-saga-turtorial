import { call, put } from 'redux-saga/effects';
import { setJoke } from '../../action-creators';
import requestGetJoke from '../requests/joke';

//this action argument is what comes with the object that comes from action creators
//if we needed to use an id to make the async request we would use the action.payload
function* handleGetJoke(action) {
  try {
    const res = yield call(requestGetJoke);
    const { data } = res;
    yield put(setJoke(data));
  } catch (err) {
    console.log(err);
  }
}

export default handleGetJoke;

// so the watcher watches for the action type 'getJoke' then it will call the handler 'hanldeGetJoke'
// that in turn is goin to call our request and save the date in a variable and finaly is going to call
// our setJoke with the data we got form our request
