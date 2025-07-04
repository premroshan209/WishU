import { configureStore } from '@reduxjs/toolkit';
import wishFormReducer from './wishFormSlice';

export const store = configureStore({
  reducer: {
    wishForm: wishFormReducer,
  },
});
