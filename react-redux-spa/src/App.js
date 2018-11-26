import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import configureStore from './stores';

import Container from './pages/Container';
import { asyncComponent } from './components/AsyncComponent';


const history = createHistory();
const store = configureStore(history);

// window._____APP_STATE_____ = store;

const routes = [
	{
		path: '/',
		component: () => import('./pages/Home'),
		requireAuth: true,
	},
	{
		path: '/detail',
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
		</Provider>
	)
}