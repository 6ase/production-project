import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	lng: 'ru', // язык по умолчанию
	fallbackLng: 'ru',
	resources: {
		en: {
			// ваш файл перевода для английского языка
		}
	}
});

export default i18n;