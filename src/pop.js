import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import sagas from './sagas';
/* import store&&saga */
import { store, sagaRun } from './store';
/* import components */
import App from './App';

sagaRun(sagas);
/* Reander */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
