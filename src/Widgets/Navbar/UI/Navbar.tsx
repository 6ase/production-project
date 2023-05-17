import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Navbar.module.scss';

import { NavBarLink } from 'Widgets/NavBarLink';
import { ThemeSwitcher } from 'Widgets/ThemeSwitcher';
import { LangSwitcher } from 'Widgets/LangSwitcher';

const Navbar = () => {
    
	return (
		<div className={classNames(cls.nav)}>
			<NavBarLink/>
			<div className={classNames(cls.switchers)}>
				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
	);
};
export default Navbar;

