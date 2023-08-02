import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './ErrorMsgComponent.module.scss';
import { useTranslation } from 'react-i18next';

const ErrorMsgComponent: React.FC<any> = ({ error }) => {

	const { t } = useTranslation();

	if( typeof error === 'string') {
		return (
			<React.Fragment>
				<p className={classNames(cls.center)}>
					{t(error)}
				</p>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<p className={classNames(cls.center)}>
					{error.map((err:any, index:number) => (
						<React.Fragment key={index}>
							{t(err.msg)}
							<br />
						</React.Fragment>
					))}
				</p>
			</React.Fragment>
		);
	}
};

export default ErrorMsgComponent;