import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SideBar } from './SideBar';
import { I18nextProvider } from 'react-i18next';
import i18n from 'Shared/Config/i18n/i18n_Test';
import { BrowserRouter } from 'react-router-dom';


describe('Тест SideBar', () => {
	test('Проверяем наличие класса SideBar и нажатия кнопки',  () => {

		render(
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<SideBar/>
				</BrowserRouter>
			</I18nextProvider>
		);
		const button = screen.getByTestId('toggle_button');
		expect(screen.getByTestId('side_bar')).toHaveClass('SideBar');
		fireEvent.click(button);
		expect(screen.getByTestId('side_bar')).toHaveClass('active');
	});

});