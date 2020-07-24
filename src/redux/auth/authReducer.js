  
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialUserState = {name: null, email: null};

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (state, {payload}) => payload.user,
    [authActions.loginSuccess]: (state, {payload}) => payload.user,
    [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
    [authActions.logoutSuccess]: () => initialUserState,
})

const token = createReducer(null, {
    [authActions.registerSuccess]: (state, { payload }) => payload.token,
    [authActions.loginSuccess]: (state, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null,
  });
  
  const error = createReducer(null, {
    [authActions.registerError]: (state, { payload }) => payload,
    [authActions.loginError]: (state, { payload }) => payload,
    [authActions.logoutError]: (state, { payload }) => payload,
    [authActions.getCurrentUserError]: (state, { payload }) => payload,
  });

export default combineReducers({
user,
token,
error,
});