import { createSlice } from '@reduxjs/toolkit';

import { UserData } from 'Entities/Redux/Config/UI/StateSchema';

const initialState: UserData = { };
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.userData = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

