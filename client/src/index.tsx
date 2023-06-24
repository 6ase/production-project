import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'App/Providers/ThemeProvider';
import App from 'App/App';
import 'Shared/Config/i18n/i18n';
import { ErrorBoundary } from 'App/Providers/ErrorBoundary';
import { ReduxProvider } from 'App/Providers/ReduxProvider';

render(
	<BrowserRouter>
		<ReduxProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</ErrorBoundary>
		</ReduxProvider>
	</BrowserRouter>,
	document.getElementById('root')
);