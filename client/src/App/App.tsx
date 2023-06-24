import { Suspense, useState } from 'react';
import './Styles/index.scss';
import { useTheme } from './Providers/ThemeProvider';
import { classNames } from 'Shared/Lib/classNames';
import { Router } from './Providers/Router';
import { Navbar } from 'Widgets/Navbar';
import { SideBar } from 'Widgets/SideBar';
import { Modal } from 'Shared/UI/Modal';
import { useSelector } from 'react-redux';
import { getIsModalActive, getModalContent } from 'Entities/Redux/Config';
import SignUpPage from 'Pages/SignUpPage/UI/SignUpPage';
import { SignInPage } from 'Pages/SignInPage';


const App = () => {
	const { theme } = useTheme();
	const active = useSelector(getIsModalActive);
	const modalContent = useSelector(getModalContent);	
	return (
		<Suspense fallback=''>
			<div className={classNames('app', { }, [ theme ])}>
				{modalContent === 'signUp'
					?<Modal isActive={active}><SignUpPage/></Modal>
					:<Modal isActive={active}><SignInPage/></Modal>}
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