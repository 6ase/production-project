import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isActive: false
};
export const activeSlice = createSlice({
	name: 'active',
	initialState,
	reducers: {
		changeActive: (state) => {
			state.isActive = !state.isActive;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions: modalActiveActions } = activeSlice;
export const { reducer: modalActiveReducer } = activeSlice;
