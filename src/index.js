import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootContainer from './containers/RootContainer';
import thunk from 'redux-thunk';
import reducers from './reducers';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')
)
