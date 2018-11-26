import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import reducers from './reducers';


import * as app from './reducers/app.js'
import * as login from './reducers/login.js'

export default function configureStore(history) {
	const store = createStore(
		combineReducers({
			...app,
			...login,
			router: routerReducer
		}),
		applyMiddleware(
			routerMiddleware(history),
			thunk,
			logger
		)
	);

	return store;
}