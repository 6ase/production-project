import React, { useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SideBar.module.scss';
import { useTranslation } from 'react-i18next';
import Button, { ButtonStyle } from 'Shared/UI/SwitchThemeButton/UI/Button';

export const SideBar = () => {
    
	const [ active, setActive ] = useState(false);
	const { t } = useTranslation();
	const onToggle = () => {
		setActive( prev => !prev);
	};
	return (
		<div data-testid='side_bar' className={classNames(cls.SideBar, { [ cls.active ]: active })}>
			<Button data-testid='toggle_button' theme={ButtonStyle.TOOGLE}
				onClick={onToggle} >{t('Toggle')} </Button>
		</div>
	);
};

