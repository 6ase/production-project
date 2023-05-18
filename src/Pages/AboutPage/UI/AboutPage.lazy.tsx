import { lazy } from 'react';
// @ts-ignore
export const AboutPageLazy = lazy(() => new Promise( resolve => setTimeout(() => resolve(import('./AboutPage')), 2000)));