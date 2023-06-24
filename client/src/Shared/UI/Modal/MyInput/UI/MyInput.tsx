import React, { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './MyInput.module.scss';


export enum MyInputStyle {
    CLEAR = 'clear',
	
}
interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme?: string;
    className?: string;
  }
const MyInput: FC<MyInputProps> = (props) => {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		className,
		theme,
		...otherProps
	}
     = props;
	return (
		<input className={classNames(cls.input, {  }, [ cls[ theme ] ])}
			{...otherProps}
		/>
	);
};
export default MyInput;

