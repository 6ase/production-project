import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'App/Providers/ThemeProvider';
// eslint-disable-next-line react/display-name
export const themeDecorator: Decorator = (StoryComponent, context) => {
	const { globals: { theme } } = context;
	return (
		<ThemeProvider>
			<div className={`app ${theme}`}>
				<StoryComponent/>
			</div>
		</ThemeProvider>
	);
};