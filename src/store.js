import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
export const sagaRun = sagas => sagaMiddleware.run(sagas);
