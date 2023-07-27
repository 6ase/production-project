import React, { useCallback } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Navbar.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';
import { getUserInfo } from 'Entities/Redux/Config';
import AuthService from 'Features/services/AuthService';
import { userActions } from 'Entities/Redux/Slices/UserSlice';


const Navbar:React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const openModal = useCallback((page: string) => {
		dispatch(modalActiveActions.changeActive());
		dispatch(modalActiveActions.setModalContent(page));
	}, [ dispatch ]);
	const user = useSelector(getUserInfo);
	const logout = useCallback(async() => {
		try {
			await AuthService.logout();
			dispatch(userActions.clearUserInfo());
			localStorage.removeItem('token');
		} catch (error) {
			console.log(error.response);
		}
	}, [ dispatch ]);
	return (
		<div className={classNames(cls.nav)}>
			{user?.name? (
				<Button onClick={logout} theme='inverseThemeButtons'>{t('LogOut')}</Button>):
				(<>
					<Button onClick={() => openModal('signIn')} theme='inverseThemeButtons'>{t('SignIn')}</Button>
					<Button onClick={() => openModal('signUp')} theme='inverseThemeButtons'>{t('SignUp')}</Button>
				</>
				)}
		</div>
	);
};
export default Navbar;

