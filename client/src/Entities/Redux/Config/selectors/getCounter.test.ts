import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { StateShema } from '../UI/StateSchema';

describe('Get Counter', () => {
	test('Should return counter value', () => {
		const state: DeepPartial<StateShema> ={
			counter: { value: 10 }
		};
		expect(getCounter(state as StateShema)).toEqual({ value: 10 });
	});
});