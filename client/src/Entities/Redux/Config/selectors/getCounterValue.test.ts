import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from '../UI/StateSchema';
import { getCounterValue } from './getCounterValue';


describe('Get Counter', () => {
	test('Should return counter value', () => {
		const state: DeepPartial<StateShema> ={
			counter: { value: 10 }
		};
		expect(getCounterValue(state as StateShema)).toBe(10);
	});
});