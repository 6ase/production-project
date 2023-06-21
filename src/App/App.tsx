import { Suspense, useState } from 'react';
import './Styles/index.scss';
import { useTheme } from './Providers/ThemeProvider';
import { classNames } from 'Shared/Lib/classNames';
import { Router } from './Providers/Router';
import { Navbar } from 'Widgets/Navbar';
import { SideBar } from 'Widgets/SideBar';
import { Modal } from 'Shared/UI/Modal';
import { useSelector } from 'react-redux';
import { getIsModalActive } from 'Entities/Redux/Config';


const App = () => {
	const { theme } = useTheme();
	const active = useSelector(getIsModalActive);
		
	return (
		<Suspense fallback=''>
			<div className={classNames('app', { }, [ theme ])}>
				<Modal isActive={active} />
				<Navbar/>
				<div className="content-page">
					<SideBar/>
					<Router/>
				</div>
			</div>
		</Suspense>
	);
};

export default App;