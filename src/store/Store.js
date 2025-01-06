import {configureStore} from '@reduxjs/toolkit';
import fireworksReducer from './FireWorksSlice.js';
import themeReducer from './ThemeSlice.js';
/**
 * The Redux store for the application.
 * @type {Store}
 */
export const store = configureStore({
    reducer: {
        fireworks: fireworksReducer,
        theme: themeReducer
    }
});