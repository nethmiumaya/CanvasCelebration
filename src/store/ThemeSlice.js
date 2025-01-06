import {createSlice} from '@reduxjs/toolkit';
/**
 * This slice of the Redux store is responsible for managing the state of the theme.
 * @type {{isDark: boolean}}
 */
const initialState = {
    isDark: true
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
        }
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;