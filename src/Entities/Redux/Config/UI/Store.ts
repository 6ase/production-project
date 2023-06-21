import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'Entities/Redux/Slices/CounterSlice';
import { StateShema } from './StateSchema';
import { modalActiveReducer } from 'Entities/Redux/Slices/ModalActiveSlice/UI/ModalActiveSlice';


export function createReduxStore (initialState: StateShema){
	return configureStore<StateShema>({
		reducer: {
			counter: counterReducer,
			active: modalActiveReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}


