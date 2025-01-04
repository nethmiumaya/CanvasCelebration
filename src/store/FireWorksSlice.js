import {createSlice} from '@reduxjs/toolkit';
/**
 * This slice of the Redux store is responsible for managing the state of the fireworks display.
 * It stores the messages to be displayed as fireworks, the selected color, the index of the current message,
 * @constant initialState
 * @type {{messages: Array, selectedColor: string, messageIndex: number, fireworksData: Array}}
 */
const initialState = {
    messages: [], // Populated from user input
    selectedColor: '',
    messageIndex: 0,
    fireworksData: [] // Only store position and text data
};

export const fireworksSlice = createSlice({
    name: 'fireworks',
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload;
        },
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
    setMessages,
    setSelectedColor,
    addFireworkData,
    updateMessageIndex,
    clearFireworks,
} = fireworksSlice.actions;

export default fireworksSlice.reducer;