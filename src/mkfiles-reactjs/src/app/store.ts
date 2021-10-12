import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/storage/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
