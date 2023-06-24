import React from 'react';
import { LinksConfig } from 'Shared/Config/navbarLink/navbarLink';
import { NavLink } from 'react-router-dom';
import cls from './NavBarLink.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'Shared/Lib/classNames';


interface NavLinkProps {
	isSideBarActive: boolean;
  }
  
const NavBarLink = ({ isSideBarActive }: NavLinkProps) => {
	const { t } = useTranslation();
	const setActiveStatus = (state: boolean): string => {
		return state? cls.active: cls.inactive;
	};
	const links = Object.values(LinksConfig);
	
	return (
		<>
			{ links.map(link => 
				<div key={link.name} className={classNames(cls.link, { }, [])}>	
					<NavLink to={ link.to } 
						key={ link.name } 
						className={ ({ isActive } ) => 	setActiveStatus(isActive)}
					>	
						{ link.icon }
						{ isSideBarActive? t(link.name): '' }
					</NavLink>
				</div>)
			}
		</>
	);
};

export default NavBarLink;