import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { asyncComponent } from './components/AsyncComponent';
import Container from './pages/Container';
// import loadable from '@loadable/component';
import Loadable from "loadable-components";

import './styles/common.scss';

// import Home from './pages/Home';
// import List from './pages/List';
// import About from './pages/About';
// import Detail from './pages/Detail';
// import Login from './pages/Login';

const Loading=(props)=>
  <div>Loading...</div>

export const routes = [
  {
    path: '/',
    // component: Home,
    component: Loadable(() => import(/* webpackChunkName: 'index' */ './pages/Home')),
  },
  {
    path: '/list',
    // component: List,
    component: Loadable(() => import(/* webpackChunkName: 'list' */ './pages/List')),
  },
  {
    path: '/about',
    // component: About,
    component: Loadable(() => import(/* webpackChunkName: 'about' */ './pages/About')),
    requireAuth: true,
  },
  {
    path: '/detail/:id',
    // component: Detail,
    component: Loadable(() => import(/* webpackChunkName: 'detail' */ './pages/Detail')),
    requireAuth: true,
  },
  {
    path: '/login',
    // component: Login,
    component: Loadable(() => import(/* webpackChunkName: 'login' */ './pages/Login')),
  },
];

export default () => (
  <Container>
    <Switch>
      {
        routes.map(item => 
          <Route
            exact={true}
            path={item.path}
            key={item.path}
            component={item.component} />
        )
      }
      <Route
        exact
        path="/index"
        render={() => <Redirect to="/"/>} />
    </Switch>
  </Container>
)
