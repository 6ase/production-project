import React from 'react';
import { LinksConfig } from 'Shared/Config/navbarLink/navbarLink';
import { NavLink } from 'react-router-dom';
import cls from './NavBarLink.module.scss'

const NavBarLink = () => {
  const setActiveStatus = (state: boolean): string => state? cls.active: cls.inactive;
  const links = Object.values(LinksConfig)
  return (
    <>
        {links.map(link=><NavLink to={link.to} className={({ isActive }) => setActiveStatus(isActive)}>{link.name}</NavLink>)}
    </>
  );
};

export default NavBarLink;