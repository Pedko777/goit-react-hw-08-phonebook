import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';
import authReducer from './auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    themeColor: themeReducer,
    contactsRoot: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
