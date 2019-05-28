import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './stores';
import { PersistGate } from 'redux-persist/integration/react';
import { loadComponents } from "loadable-components";

import App from './App';

// export const history = createHistory();

const { store, persistor } = configureStore(window.__INITIAL_STATE__ || {});

const reactApp = (
  <Provider store={store}>
      <Router>
        <App/>
      </Router>
  </Provider>
);

let inBrowser = typeof window !== 'undefined';
let ReactRender = process.env.NODE_ENV == 'development' ? ReactDOM.render : ReactDOM.hydrate;

loadComponents().then(() => {
  inBrowser && ReactRender(
    <AppContainer>{reactApp}</AppContainer>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept()  
}  

// registerServiceWorker();
