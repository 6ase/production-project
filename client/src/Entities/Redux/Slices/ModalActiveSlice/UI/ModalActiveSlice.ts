import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isActive: false,
	content: ''
};
export const activeSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		changeActive: (state) => {
			state.isActive = !state.isActive;
		},
		setModalContent: (state, action) => {
			state.content = action.payload;
		}
	},
});

// Action creators are generated for each case reducer function
export const { actions: modalActiveActions } = activeSlice;
export const { reducer: modalActiveReducer } = activeSlice;
