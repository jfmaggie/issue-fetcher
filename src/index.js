import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootContainer from './containers/RootContainer';
import reducers from './reducers';

let store = createStore(reducers);

render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')
)