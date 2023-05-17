import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingPage = () => {
	const { t } = useTranslation();
	return (
		<div>
			{ t('Загрузка') }
		</div>
	);
};

export { LoadingPage };