import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { watcherSaga } from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(reducers, {}, applyMiddleware(...middleware));

//same as turning on our watcher
sagaMiddleware.run(watcherSaga);
