import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserData } from 'Entities/Redux/Config/UI/StateSchema';
import { loginByEmail, signUpByEmail } from 'Features/services/AuthService';

const initialState: UserData = { };
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserInfo: (state, action: PayloadAction<object>) => {
			state.userData = action.payload;
		},
		clearUserInfo: (state) => {
			state.userData = {};
		},
		clearError: (state) => {
			state.error = null;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByEmail.fulfilled, (state ) => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(loginByEmail.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(loginByEmail.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(signUpByEmail.fulfilled, (state ) => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(signUpByEmail.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(signUpByEmail.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

