/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const reducersWithPersist = persistReducer(
  {
    key: 'v1',
    storage,
  },
  // @ts-ignore
  rootReducer,
);

export default () => {
  const composeEnhancers =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducersWithPersist,
    composeEnhancers(applyMiddleware(thunk)),
  );

  // @ts-ignore
  const persistor = persistStore(store);
  return { store, persistor };
};
