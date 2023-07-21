import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './ErrorMsgComponent.module.scss';

export interface ErrorMsgComponentProps {
    error: string[];
  }
const ErrorMsgComponent: React.FC<ErrorMsgComponentProps> = ({ error }) => {
	return (
		<React.Fragment>
			<p className={classNames(cls.center)}>
				{error.map((err, index) => (
					<React.Fragment key={index}>
						{err}
						<br />
					</React.Fragment>
				))}
			</p>
		</React.Fragment>
	);
};

export default ErrorMsgComponent;