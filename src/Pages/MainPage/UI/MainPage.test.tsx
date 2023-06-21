import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  MainPage  from './MainPage';
import { I18nextProvider } from 'react-i18next';
import i18n from 'Shared/Config/i18n/i18n_Test';
import { BrowserRouter } from 'react-router-dom';
import { ReduxProvider } from 'App/Providers/ReduxProvider';

describe('Тест MainPage', () => {
	test('Проверяем наличие стейта на странице',  () => {
		const initialState = { counter: { value: 10 }, active: { isActive: false } };
		render(
			<ReduxProvider initialState={initialState}>
				<I18nextProvider i18n={i18n}>
					<BrowserRouter>
						<MainPage/>
					</BrowserRouter>
				</I18nextProvider>
			</ReduxProvider>
		);
		expect(screen.getByTestId('count')).toHaveTextContent('10');
	});
	test('Проверяем работу increment',  () => {
		const initialState = { counter: { value: 20 }, active: { isActive: false } };
		render(
			<ReduxProvider initialState={initialState}>
				<I18nextProvider i18n={i18n}>
					<BrowserRouter>
						<MainPage/>
					</BrowserRouter>
				</I18nextProvider>
			</ReduxProvider>
		);
		const buttonIncrement = screen.getByTestId('increment_button');
		fireEvent.click(buttonIncrement);
		expect(screen.getByTestId('count')).toHaveTextContent('21');
	});
	test('Проверяем работу decrement',  () => {
		const initialState = { counter: { value: 20 }, active: { isActive: false } };
		render(
			<ReduxProvider initialState={initialState}>
				<I18nextProvider i18n={i18n}>
					<BrowserRouter>
						<MainPage/>
					</BrowserRouter>
				</I18nextProvider>
			</ReduxProvider>
		);
		const buttonIncrement = screen.getByTestId('decrement_button');
		fireEvent.click(buttonIncrement);
		expect(screen.getByTestId('count')).toHaveTextContent('19');
	});
});