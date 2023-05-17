import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './ThemeButton.module.scss';


export enum ThemeButtonStyle {
    CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    theme?: string,
}
const ThemeButton: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		...otherProps
	}
     = props;
	return (
		<button className={classNames(cls.Button, { }, [ cls[theme] ])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default ThemeButton;

