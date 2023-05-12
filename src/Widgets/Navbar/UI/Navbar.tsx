import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Navbar.module.scss'
import { ThemeButton } from 'Widgets/ThemeButton';
import { NavBarLink } from 'Widgets/NavBarLink';

const Navbar = () => {
    
    return (
        <div className={classNames(cls.nav)}>
        <NavBarLink/>
        <ThemeButton/>
        </div>
    );
};
export default Navbar;

