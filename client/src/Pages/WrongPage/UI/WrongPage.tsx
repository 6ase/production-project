import { classNames } from 'Shared/Lib/classNames';
import cls from './WrongPage.module.scss';
import { useTranslation } from 'react-i18next';

const WrongPage = () => {
	const { t } = useTranslation();
	const reloadPage = (): void => {
		location.reload();
	};
	return (
		<div className={classNames(cls.WrongPage)}>
			{t('WrongPage')}
			<button onClick={reloadPage}>{t('reload')}</button>
		</div>
	);
};

export default WrongPage;