import { Suspense, useState } from 'react';
import './Styles/index.scss';
import { useTheme } from './Providers/ThemeProvider';
import { classNames } from 'Shared/Lib/classNames';
import { Router } from './Providers/Router';
import { Navbar } from 'Widgets/Navbar';
import { SideBar } from 'Widgets/SideBar';
import { Modal } from 'Shared/UI/Modal';
import { ReduxProvider } from './Providers/ReduxProvider';



const App = () => {
	const { theme } = useTheme();
	const [ active, setActive ] = useState(false);
	
	return (
		<ReduxProvider>
			<Suspense fallback=''>
				<div className={classNames('app', { }, [ theme ])}>
					<Modal isActive={active} setActive={setActive}/>
					<Navbar setActive={setActive}/>
					<div className="content-page">
						<SideBar/>
						<Router/>
					</div>
				</div>
			</Suspense>
		</ReduxProvider>
	);
};

export default App;