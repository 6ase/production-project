import { NavLinkProps } from 'react-router-dom';
import { ReactElement } from 'react';
import { HomeSVG, AboutSVG } from 'Shared/UI/SvgComponent';

export enum Links {
    MAIN = 'main',
    ABOUT = 'about'
}

type NavLinkPropsExtended = NavLinkProps & {
	name: string;
	icon: ReactElement;
  };
export const LinkPath: Record<Links, string> = {
	[ Links.MAIN ]: '/',
	[ Links.ABOUT ]: 'about'
};

export const LinkIcon: Record<Links, ReactElement> = {
	[ Links.MAIN ]: <HomeSVG/>,
	[ Links.ABOUT ]: <AboutSVG/>,
};

export const LinkNames: Record<Links, string> = {
	[ Links.MAIN ]: 'Главная',
	[ Links.ABOUT ]: 'О проекте'
};
export const LinksConfig: Record<Links, NavLinkPropsExtended> = {
	[ Links.MAIN ]: {
		to: LinkPath.main,
		name: LinkNames.main,
		icon: LinkIcon.main,
	},
	[ Links.ABOUT ]: {
		to: LinkPath.about,
		name: LinkNames.about,
		icon: LinkIcon.about
	},
    
};