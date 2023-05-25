import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Button.module.scss';


export enum ButtonStyle {
    CLEAR = 'clear',
	SWITCHER = 'switcher',
	TOOGLE = 'toogle'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    theme?: string,
}
const Button: FC<ButtonProps> = (props) => {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		className,
		children,
		theme,
		...otherProps
	}
     = props;
	return (
		<button className={classNames(cls.Button, { }, [ cls[ theme ] ])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default Button;

