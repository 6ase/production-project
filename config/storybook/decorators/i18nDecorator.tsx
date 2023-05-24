import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../src/Shared/Config/i18n/i18n_StoryBook';
import { Decorator } from '@storybook/react';
 
// Wrap your stories in the I18nextProvider component
export const withI18next: Decorator = (Story, context) => {
	const { locale } = context.globals;
	// When the locale global changes
	// Set the new locale in i18n
	useEffect(() => {
		i18n.changeLanguage(locale);
	}, [ locale ]);
	return (
	// This catches the suspense from components not yet ready (still loading translations)
	// Alternative: set useSuspense to false on i18next.options.react when initializing i18next
		<Suspense fallback=''>
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		</Suspense>
	);
};
 

