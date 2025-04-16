import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';


export const store = configureStore({
  reducer: {
    // Add the profile slice to the store
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
