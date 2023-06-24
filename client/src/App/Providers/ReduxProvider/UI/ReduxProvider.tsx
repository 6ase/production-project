
import { createReduxStore } from 'Entities/Redux/Config';
import { StateShema } from 'Entities/Redux/Config/UI/StateSchema';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

type reduxProviderProps = {
	children: ReactNode,
	initialState?: StateShema
}

const ReduxProvider = ({ children, initialState } :reduxProviderProps) => {

	const store = createReduxStore(initialState);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default ReduxProvider;