import React, { useCallback } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Navbar.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';


const Navbar:React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const changeActive = () => dispatch(modalActiveActions.changeActive());
	return (
		<div className={classNames(cls.nav)}>
			<Button onClick={changeActive} theme='inverseThemeButtons'>{t('SignIn')}</Button>
			<Button onClick={changeActive} theme='inverseThemeButtons'>{t('SignUp')}</Button>
		</div>
	);
};
export default Navbar;

