import { createReduxStore } from './UI/Store';
import { CounterShema, StateShema } from './UI/StateSchema';
import { getCounter } from './selectors/getCounter';
import { getCounterValue } from './selectors/getCounterValue';
export {
	createReduxStore,
	CounterShema,
	StateShema,
	getCounter,
	getCounterValue
};