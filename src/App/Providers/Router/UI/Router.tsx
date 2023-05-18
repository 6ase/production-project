import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'Shared/Config/routesConfig/routesConfig';
import { Loader } from 'Widgets/Loader';



const Router = () => {
	const routes = Object.values(routesConfig);
	return (
		<div className="page-wrapper">
			<Suspense fallback={<Loader/>} >
				<Routes>
					{routes.map(({ path, element }) => <Route key={ path } path={ path } element={ element }/>)}
				</Routes>
			</Suspense>
		</div>
	);
};

export default Router;



