import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

import './stylesheets/index.css';
import Home from './containers/Home';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker();
