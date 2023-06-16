import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { CounterShema } from '../UI/StateSchema';

export const getCounterValue = createSelector(
	getCounter,
	(state: CounterShema) => state.value);