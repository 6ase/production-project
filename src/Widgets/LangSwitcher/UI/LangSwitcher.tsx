import { useTranslation } from 'react-i18next';
import En from 'Shared/assets/icons/en.svg';
import Ru from 'Shared/assets/icons/ru.svg';
import Button, { ButtonStyle } from 'Shared/UI/SwitchThemeButton/UI/Button';

export const LangSwitcher = () => {
	const { i18n } = useTranslation();
	const lang = i18n.language;

	const changeLang = (): void => {
		i18n.changeLanguage(lang === 'ru'? 'en': 'ru');
	};
	return (
		<Button onClick={changeLang} theme={ButtonStyle.SWITCHER}>
			{ lang === 'ru'? <En/> :<Ru/> }
		</Button>
	);
};

