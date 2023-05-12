import { NavLinkProps } from "react-router-dom"

export enum Links {
    MAIN = 'main',
    ABOUT = 'about'
}
type NavLinkPropsExtended = NavLinkProps & {
    name: string;
  };
export const LinkPath: Record<Links, string> = {
    [ Links.MAIN ] : '/',
    [ Links.ABOUT ] : 'about'
}
export const LinkNames: Record<Links, string> = {
    [ Links.MAIN ] : 'Главная',
    [ Links.ABOUT ] : 'О проекте'
}
export const LinksConfig: Record<Links, NavLinkPropsExtended> = {
    [ Links.MAIN ] : {
        to: LinkPath.main,
        name: LinkNames.main,
    },
    [ Links.ABOUT ] : {
        to: LinkPath.about,
        name: LinkNames.about,
    },
    
}