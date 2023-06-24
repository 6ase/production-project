import { CounterShema } from 'Entities/Redux/Config';
import { counterActions, counterReducer } from '../index';

describe('CounterSlice', () => {
	test('Decrement', () => {
		const state: CounterShema = { value: 10 };
		expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
	});
	test('Increment', () => {
		const state: CounterShema = { value: 10 };
		expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
	});
	test('without state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
	});
});