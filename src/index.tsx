import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'App/Providers/ThemeProvider';
import App from 'App/App';
import 'Shared/Config/i18n/i18n';

render(
	<BrowserRouter>
		<ThemeProvider>
			<App/>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
);