import { configureStore } from '@reduxjs/toolkit';
import taskSlise from './taskSlise';

export const store = configureStore({
  reducer: {
    tasks: taskSlise,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

