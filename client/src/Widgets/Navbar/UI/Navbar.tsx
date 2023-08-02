import React, { useCallback, useEffect } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Navbar.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';

import { logout } from 'Features/services/AuthService';
import { getUserInfo } from 'Entities/Redux/Config';
import { getUserName } from 'Entities/Redux/Config/selectors/user/getUserName';
import Text from 'Shared/UI/Text/UI/Text';



const Navbar:React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const openModal = useCallback((page: string) => {
		dispatch(modalActiveActions.changeActive());
		dispatch(modalActiveActions.setModalContent(page));
	}, [ dispatch ]);
	const user = useSelector(getUserInfo);

	const onLogoutClick = useCallback( () => {
		dispatch<any>(logout());
	}, [ dispatch ]);
	
	return (
		<div className={classNames(cls.nav)}>
			{ user.userData?.name? (
				<>
					<Text text={`${t('User')}: ${ user.userData.name}`}/>
					<Button onClick={onLogoutClick} theme='inverseThemeButtons'>{t('LogOut')}</Button>
				</>
			):
				(<>
					<Button onClick={() => openModal('signIn')} theme='inverseThemeButtons'>{t('SignIn')}</Button>
					<Button onClick={() => openModal('signUp')} theme='inverseThemeButtons'>{t('SignUp')}</Button>
				</>
				)}
		</div>
	);
};
export default Navbar;

