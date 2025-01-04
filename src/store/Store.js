import {configureStore} from '@reduxjs/toolkit';
import fireworksReducer from './FireWorksSlice.js';
/**
 * The Redux store for the application.
 * @type {Store}
 */
export const store = configureStore({
    reducer: {
        fireworks: fireworksReducer
    }
});