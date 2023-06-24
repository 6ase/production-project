import { Decorator } from '@storybook/react';
import 'App/Styles/index.scss';
import { BrowserRouter } from 'react-router-dom';


export const routerDecorator: Decorator = (Story) => (
	<BrowserRouter>
		<Story/>
	</BrowserRouter>);