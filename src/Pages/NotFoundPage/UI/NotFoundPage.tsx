import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
	const { t }  = useTranslation();
	return (
		<div className={classNames(cls.notFound)}>
			{t('NotFound')}
		</div>
	);
};

export default NotFoundPage;