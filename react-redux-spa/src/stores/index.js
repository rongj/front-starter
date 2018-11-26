import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from './reducers';

export default function configureStore(history) {
	const store = createStore(
		combineReducers({
			...reducers,
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