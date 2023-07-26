import React, { useCallback } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Navbar.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';
import { getUserInfo } from 'Entities/Redux/Config';


const Navbar:React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const openModal = (page: string) => {
		dispatch(modalActiveActions.changeActive());
		dispatch(modalActiveActions.setModalContent(page));
	};
	const user = useSelector(getUserInfo);
	return (
		<div className={classNames(cls.nav)}>
			{user.userData?
				<Button onClick={() => console.log('ЗАКРЫТЬ!')} theme='inverseThemeButtons'>{t('LogOut')}</Button>:
				<>
					<Button onClick={() => openModal('signIn')} theme='inverseThemeButtons'>{t('SignIn')}</Button>
					<Button onClick={() => openModal('signUp')} theme='inverseThemeButtons'>{t('SignUp')}</Button>
				</>
			}
		</div>
	);
};
export default Navbar;

