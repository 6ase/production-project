import React from 'react';
import { LinksConfig } from 'Shared/Config/navbarLink/navbarLink';
import { NavLink } from 'react-router-dom';
import cls from './NavBarLink.module.scss';
import { useTranslation } from 'react-i18next';

const NavBarLink = () => {
	const { t } = useTranslation();
	const setActiveStatus = (state: boolean): string => state? cls.active: cls.inactive;
	const links = Object.values(LinksConfig);
	return (
		<>
			{links.map(link => 
				<NavLink to={ link.to } key={link.name} className={ ({ isActive } ) => setActiveStatus(isActive)}> { t(link.name) }</NavLink>) }
		</>
	);
};

export default NavBarLink;