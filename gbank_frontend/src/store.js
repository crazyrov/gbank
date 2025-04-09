import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        // Add more reducers here
    },
});

export default store;