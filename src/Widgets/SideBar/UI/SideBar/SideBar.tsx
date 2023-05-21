import React, { useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SideBar.module.scss';
import { useTranslation } from 'react-i18next';

export const SideBar = () => {
    
	const [ active, setActive ] = useState(false);
	const { t } = useTranslation();
	const onToggle = () => {
		setActive( prev => !prev);
	};
	return (
		<div data-testid='side_bar' className={classNames(cls.SideBar, { [ cls.active ]: active })}>
			<button data-testid='toggle_button'
				onClick={onToggle}>{t('Toggle')}
			</button>
		</div>
	);
};

