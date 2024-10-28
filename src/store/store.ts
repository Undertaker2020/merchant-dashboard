import { configureStore } from '@reduxjs/toolkit';
import progressReducer from './progressSlice';
import stepReducer from './stepSlice';

export const store = configureStore({
    reducer: {
        progress: progressReducer,
        step: stepReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;