import { createReduxStore } from './UI/Store';
import { CounterShema, StateShema,   } from './UI/StateSchema';
import { getCounter } from './selectors/counter/getCounter';
import { getCounterValue } from './selectors/counter/getCounterValue';
import { getIsModalActive } from './selectors/modal/getIsModalActive';
import { getModalContent } from './selectors/modal/getModalContent';
import { getUserInfo } from './selectors/user/getUserInfo';
export {
	createReduxStore,
	CounterShema,
	StateShema,
	getCounter,
	getCounterValue,
	getIsModalActive,
	getModalContent,
	getUserInfo,
};