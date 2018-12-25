import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import configureStore from './stores';

import Container from './pages/Container';
import { asyncComponent } from './components/AsyncComponent';

import { PersistGate } from 'redux-persist/integration/react';

export const history = createHistory();
const { store, persistor } = configureStore(history);

// window.__APP_STATE__ = store;

const routes = [
  {
    path: '/',
    component: () => import('./pages/Home'),
  },
  {
    path: '/list',
    component: () => import('./pages/List'),
  },
  {
    path: '/about',
    component: () => import('./pages/About'),
  },
  {
    path: '/detail/:id',
    component: () => import('./pages/Detail'),
    requireAuth: true,
  },
  {
    path: '/login',
    component: () => import('./pages/Login'),
  },
];


export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Container>
            <Switch>
              {
                routes.map(item => 
                  <Route exact path={item.path} key={item.path} component={asyncComponent(item.component, item.requireAuth)} />
                )
              }
              <Route exact path="/index" render={()=><Redirect to="/"/>}/>
            </Switch>
          </Container>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  )
}