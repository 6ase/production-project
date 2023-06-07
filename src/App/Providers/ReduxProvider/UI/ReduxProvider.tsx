import { store } from 'Entities/Redux/Config';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

type reduxProviderProps = {
	children: ReactNode,
	
}
const ReduxProvider = ({ children } :reduxProviderProps) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default ReduxProvider;