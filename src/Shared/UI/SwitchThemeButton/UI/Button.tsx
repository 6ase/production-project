import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Button.module.scss';


export enum ButtonStyle {
    CLEAR = 'clear',
	SWITCHER = 'switcher',
	TOOGLE = 'toogle',
	ACTIVE = 'ButtonActive',
	NOT_ACTIVE = 'ButtonNotActive'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    theme?: string,
	mode?: string,
}
const Button: FC<ButtonProps> = (props) => {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		className,
		children,
		theme,
		mode,
		...otherProps
	}
     = props;
	return (
		<button className={classNames(cls.Button, {  }, [ cls[ theme ], cls[ mode ] ])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default Button;

