import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingPage } from 'Pages/LoadingPage';
import { routesConfig } from 'Shared/Config/routesConfig/routesConfig';


const Router = () => {
	const routes = Object.values(routesConfig);
	return (
		<div className="page-wrapper">
			<Suspense fallback={<LoadingPage/>} >
				<Routes>
					{routes.map(({ path, element }) => <Route key={ path } path={ path } element={ element }/>)}
				</Routes>
			</Suspense>
		</div>
	);
};

export default Router;



