import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerResponse } from 'Entities/Redux/Config/UI/StateSchema';
import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';
import { userActions } from 'Entities/Redux/Slices/UserSlice';


export interface loginByEmailProps {
    email: string,
    password: string
}
export interface SignUpByEmailProps {
    name: string,
	email: string,
    password: string,
	confirmPassword: string,
}
export interface ErrorResponse {
	error: string|object[];
  }
const API_URL = 'http://localhost:4000';		

export const loginByEmail = createAsyncThunk<ServerResponse, loginByEmailProps, { rejectValue: ErrorResponse }>(
	'user/loginByEmail',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post<ServerResponse>(`${API_URL}/user/signin`, authData, { withCredentials: true });
			thunkAPI.dispatch(userActions.setUserInfo(response.data.user));
			localStorage.setItem('token', response.data.tokens.accesToken);
			thunkAPI.dispatch(modalActiveActions.changeActive());
			thunkAPI.dispatch(userActions.clearError());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.error);
		}
	}
);
export const signUpByEmail = createAsyncThunk<ServerResponse, SignUpByEmailProps, { rejectValue: ErrorResponse }>(
	'user/signUpByEmail',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post<ServerResponse>(`${API_URL}/user/signup`, authData, { withCredentials: true });
			thunkAPI.dispatch(userActions.setUserInfo(response.data.user));
			localStorage.setItem('token', response.data.tokens.accesToken);
			thunkAPI.dispatch(modalActiveActions.changeActive());
			thunkAPI.dispatch(userActions.clearError());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.error);
		}
	}
);
export const logout = createAsyncThunk<{ rejectValue: string }>(
	'user/logout',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.get(`${API_URL}/user/logout`, { withCredentials: true });
			thunkAPI.dispatch(userActions.clearUserInfo());
			localStorage.removeItem('token');
			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.response.data.error);
		}
	}
);
export const checkAuth = createAsyncThunk<{ rejectValue: string }>(
	'user/checkAuth',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post(`${API_URL}/user/refresh`, null, { withCredentials: true });
			thunkAPI.dispatch(userActions.setUserInfo(response.data.user));
			localStorage.setItem('token', response.data.tokens.accesToken);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.error);
		}
	}
);
