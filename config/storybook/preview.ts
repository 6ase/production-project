import type { Preview } from '@storybook/react';
import { styleDecorator } from './decorators/styleDecorator';
import { themeDecorator } from './decorators/themeDecorator';
import { routerDecorator } from './decorators/routerDecorator';
import { withI18next } from './decorators/i18nDecorator';
import '../../src/Widgets/Loader/UI/Loader.css';

const preview: Preview = {
	decorators: [ styleDecorator, themeDecorator, routerDecorator, withI18next ],
};
export const globalTypes = {
	theme: {
		name: 'Theme',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			items: [
				{ value: 'light', title: 'Light' },
				{ value: 'dark', title: 'Dark' },
			],
			showName: true,
			dynamicTitle: true
		}
	},
	locale: {
		name: 'Locale',
		description: 'Internationalization locale',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'ru', title: 'Русский' },
				{ value: 'en', title: 'Английский' },
			],
			showName: true,
		},
	},
};

export default preview;


