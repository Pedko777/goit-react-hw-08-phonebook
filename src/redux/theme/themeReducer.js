  
import { createReducer } from '@reduxjs/toolkit';
import themeAction from "./themeAction"

const themeReducer = createReducer(true, {
  [themeAction.changeTheme]: state => !state,
});

export default themeReducer;