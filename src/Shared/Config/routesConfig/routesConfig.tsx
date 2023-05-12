
import { AboutPage } from "Pages/AboutPage"
import { MainPage } from "Pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about'
}
export const RoutePath: Record<Routes, string> = {
    [ Routes.MAIN ] : '/',
    [ Routes.ABOUT ] : '/about'
}
export const routesConfig: Record<Routes, RouteProps> = {
    [ Routes.MAIN ] : {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [ Routes.ABOUT ] : {
        path: RoutePath.about,
        element: <AboutPage/>
    },
}