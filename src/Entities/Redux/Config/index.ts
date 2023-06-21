import { createReduxStore } from './UI/Store';
import { CounterShema, StateShema,   } from './UI/StateSchema';
import { getCounter } from './selectors/getCounter';
import { getCounterValue } from './selectors/getCounterValue';
import { getIsModalActive } from './selectors/getIsModalActive';
export {
	createReduxStore,
	CounterShema,
	StateShema,
	getCounter,
	getCounterValue,
	getIsModalActive
};