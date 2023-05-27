import React, { useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SideBar.module.scss';
import Button, { ButtonStyle } from 'Shared/UI/SwitchThemeButton/UI/Button';
import { NavBarLink } from 'Widgets/NavBarLink';
import { ThemeSwitcher } from 'Widgets/ThemeSwitcher';
import { LangSwitcher } from 'Widgets/LangSwitcher';

export const SideBar = () => {
    
	const [ active, setActive ] = useState(false);
	
	const onToggle = () => {
		setActive( prev => !prev);
	};
	return (
		<div data-testid='side_bar' className={classNames(cls.SideBar, { [ cls.active ]: active })}>
			<div className={classNames(cls.links, {}, [])}>
				<NavBarLink isSideBarActive={active}/>
			</div>
			<div className={classNames(cls.switchers, { [ cls.column ]: !active }, [])}>
				<ThemeSwitcher/>
				<LangSwitcher/>
				<Button data-testid='toggle_button' theme={ ButtonStyle.TOOGLE } 
					mode={ active? ButtonStyle.ACTIVE : ButtonStyle.NOT_ACTIVE }
					onClick={onToggle} > {active? '<': '>'} </Button>
			</div>
		</div>
	);
};

