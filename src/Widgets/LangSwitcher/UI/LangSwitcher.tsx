import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import En from 'Shared/assets/icons/en.svg';
import Ru from 'Shared/assets/icons/ru.svg';

export const LangSwitcher = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	const changeLang = () => {
		i18n.changeLanguage(lang === 'ru'? 'en': 'ru');
	};
	return (
		<button onClick={changeLang} className={classNames(cls.switcher)}> { lang === 'ru'? <En/> :<Ru/> }
		</button>
	);
};

