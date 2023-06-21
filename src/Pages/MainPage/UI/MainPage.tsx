
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'Entities/Redux/Slices/CounterSlice';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { classNames } from 'Shared/Lib/classNames';
import cls from './MainPage.module.scss';

import { getCounterValue } from 'Entities/Redux/Config';

const MainPage = () => {
	const count = useSelector(getCounterValue);

	const dispatch = useDispatch();
	const { t } = useTranslation();
	const increase = () => dispatch(counterActions.increment());
	const decrease = () => dispatch(counterActions.decrement());
	return (
		<>
			<div data-testid='main_page_header' className={classNames(cls.header)}>
				{ t('Главная страница') }
			</div>
			
			<div data-testid='main_page_content' className={classNames(cls.content)}>
				<span data-testid='count'>{count}</span>
				<Button onClick={increase} data-testid='increment_button' 
					theme='inverseThemeButtons'>{t('increment')}</Button>
				<Button onClick={decrease} data-testid='decrement_button'
					theme='inverseThemeButtons'>{t('decrement')}</Button>
			</div>
		</>
	);
};

export default MainPage;