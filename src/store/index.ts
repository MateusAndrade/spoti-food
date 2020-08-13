/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const reducersWithPersist = persistReducer(
  {
    key: 'v1',
    storage,
  },
  rootReducer,
);

export default () => {
  const store = createStore(
    reducersWithPersist,

    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  //@ts-ignore
  const persistor = persistStore(store);
  return { store, persistor };
};
