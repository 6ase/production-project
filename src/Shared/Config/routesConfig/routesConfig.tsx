
import { AboutPage } from 'Pages/AboutPage';
import { MainPage } from 'Pages/MainPage';
import { NotFoundPage } from 'Pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
	NOT_FOUND = 'notFound'
}
export const RoutePath: Record<Routes, string> = {
	[ Routes.MAIN ]: '/',
	[ Routes.ABOUT ]: '/about',
	[ Routes.NOT_FOUND ]: '*'
};
export const routesConfig: Record<Routes, RouteProps> = {
	[ Routes.MAIN ]: {
		path: RoutePath.main,
		element: <MainPage/>
	},
	[ Routes.ABOUT ]: {
		path: RoutePath.about,
		element: <AboutPage/>
	},
	[ Routes.NOT_FOUND ]: {
		path: RoutePath.notFound,
		element: <NotFoundPage/>
	},
};