import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Navbar.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';

type NavBarProps = {
	setActive: (active:boolean) => void;
}
const Navbar:React.FC<NavBarProps> = ({ setActive }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.nav)}>
			<Button onClick={() => setActive(true)} theme='navBarButtons'>{t('SignIn')}</Button>
			<Button onClick={() => setActive(true)} theme='navBarButtons'>{t('SignUp')}</Button>
		</div>
	);
};
export default Navbar;

