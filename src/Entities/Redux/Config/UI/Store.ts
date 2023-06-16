import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'Entities/Redux/Slices/CounterSlice';
import { StateShema } from './StateSchema';


export function createReduxStore (initialState: StateShema){
	return configureStore<StateShema>({
		reducer: {
			counter: counterReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}


