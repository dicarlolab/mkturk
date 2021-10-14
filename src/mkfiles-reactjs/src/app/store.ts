import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/storage/counterSlice';
import dataSlice from '../features/data/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    data: dataSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
