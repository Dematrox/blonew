import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { blonewCSlice } from './blonewC';

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    blonew: blonewCSlice.reducer
  },
})