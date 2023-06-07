import { RootState } from 'Entities/Redux/Config/UI/Store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'Entities/Redux/Slices/CounterSlice';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { classNames } from 'Shared/Lib/classNames';
import cls from './MainPage.module.scss';

const MainPage = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const increase = () => dispatch(increment());
	const decrease = () => dispatch(decrement());
	return (
		<>
			<div className={classNames(cls.header)}>
				{ t('Главная страница') }
			</div>
			
			<div className={classNames(cls.content)}>
				{count}
				<Button onClick={increase}>{t('increment')}</Button>
				<Button onClick={decrease}>{t('decrement')}</Button>
			</div>
		</>
	);
};

export default MainPage;