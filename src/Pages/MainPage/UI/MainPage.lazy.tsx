import { lazy } from 'react';
// @ts-ignore
export const MainPageLazy = lazy(() => new Promise( resolve => setTimeout(() => resolve(import('./MainPage')),1000)));