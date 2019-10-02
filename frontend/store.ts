import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import apiMiddleware from './api/middleware';
import { rootReducer } from './reducers';

const logger = createLogger({
  timestamp: true,
  duration: true,
});

const rootPersistConfig = {
  storage,
  key: 'root',
  whitelist: ['auth'],
};

const store = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  applyMiddleware(
    thunk,
    apiMiddleware,
    logger,
  ),
);

export const persistor = persistStore(store);

// persistor.purge();

export default store;