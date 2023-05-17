import { Suspense } from 'react';
import './Styles/index.scss';
import { useTheme } from './Providers/ThemeProvider';
import { classNames } from 'Shared/Lib/classNames';
import { Router } from './Providers/Router';
import { Navbar } from 'Widgets/Navbar';
import { SideBar } from 'Widgets/SideBar';

const App = () => {

	const { theme } = useTheme();
	return (
		<Suspense fallback=''>
			<div className={classNames('app', { }, [ theme ])}>
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