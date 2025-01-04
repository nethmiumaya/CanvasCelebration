import {createSlice} from '@reduxjs/toolkit';
/**
 * This slice of the Redux store is responsible for managing the state of the fireworks display.
 * It stores the messages to be displayed, the current message index, and the data for the fireworks.
 * @constant initialState
 * @type {{messages: string[], messageIndex: number, fireworksData: *[]}}
 */
const initialState = {
    messages: ['H', 'a', 'p', 'p', 'y', ' ', 'N', 'e', 'w', ' ', 'Y', 'e', 'a', 'r'],
    messageIndex: 0,
    fireworksData: [] // Only store position and text data
};

export const fireworksSlice = createSlice({
    name: 'fireworks',
    initialState,
    reducers: {
        addFireworkData: (state, action) => {
            state.fireworksData.push(action.payload);
        },
        updateMessageIndex: (state) => {
            state.messageIndex = (state.messageIndex + 1) % state.messages.length;
        },
        clearFireworks: (state) => {
            state.fireworksData = [];
            state.messageIndex = 0;
        }
    }
});

export const {
    addFireworkData,
    updateMessageIndex,
    clearFireworks,
} = fireworksSlice.actions;

export default fireworksSlice.reducer;