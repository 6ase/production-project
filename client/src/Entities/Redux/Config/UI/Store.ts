import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'Entities/Redux/Slices/CounterSlice';
import { StateShema } from './StateSchema';
import { modalActiveReducer } from 'Entities/Redux/Slices/ModalActiveSlice/UI/ModalActiveSlice';
import { userReducer } from 'Entities/Redux/Slices/UserSlice';


export function createReduxStore (initialState: StateShema){
	return configureStore<StateShema>({
		reducer: {
			counter: counterReducer,
			modal: modalActiveReducer,
			user: userReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}


