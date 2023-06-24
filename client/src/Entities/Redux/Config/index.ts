import { createReduxStore } from './UI/Store';
import { CounterShema, StateShema,   } from './UI/StateSchema';
import { getCounter } from './selectors/getCounter';
import { getCounterValue } from './selectors/getCounterValue';
import { getIsModalActive } from './selectors/getIsModalActive';
import { getModalContent } from './selectors/getModalContent';
export {
	createReduxStore,
	CounterShema,
	StateShema,
	getCounter,
	getCounterValue,
	getIsModalActive,
	getModalContent
};