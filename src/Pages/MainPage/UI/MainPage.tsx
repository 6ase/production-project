
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
			<div className={classNames(cls.header)}>
				{ t('Главная страница') }
			</div>
			
			<div className={classNames(cls.content)}>
				{count}
				<Button onClick={increase} theme='inverseThemeButtons'>{t('increment')}</Button>
				<Button onClick={decrease} theme='inverseThemeButtons'>{t('decrement')}</Button>
			</div>
		</>
	);
};

export default MainPage;