import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Root from './components/Root';
import thunk from 'redux-thunk';
import reducers from './reducers';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
