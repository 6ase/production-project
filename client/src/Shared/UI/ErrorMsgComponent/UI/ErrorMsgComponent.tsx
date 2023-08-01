import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './ErrorMsgComponent.module.scss';

const ErrorMsgComponent: React.FC<any> = ({ error }) => {
	if( typeof error === 'string') {
		return (
			<React.Fragment>
				<p className={classNames(cls.center)}>
					{error}
				</p>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<p className={classNames(cls.center)}>
					{error.map((err:any, index:number) => (
						<React.Fragment key={index}>
							{err.msg}
							<br />
						</React.Fragment>
					))}
				</p>
			</React.Fragment>
		);
	}
};

export default ErrorMsgComponent;