import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session';

import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}, history) {
  const store = createStore(
  	persistedReducer,
    // rootReducer,
    initialState,
    compose(
      applyMiddleware(
        // routerMiddleware(history),
        thunk
      )
    )
  );

  // const persistor = persistStore(store);
  const persistor = {};
  
  return { persistor, store };
}