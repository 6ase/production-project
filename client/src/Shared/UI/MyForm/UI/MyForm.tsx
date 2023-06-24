import React, { FC, FormHTMLAttributes } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './MyForm.module.scss';


export enum MyFormStyle {
    CLEAR = 'clear',
	
}
interface MyFormProps extends FormHTMLAttributes<HTMLFormElement> {
    theme?: string;
    className?: string;
    mode?: string;
  }
const MyForm: FC<MyFormProps> = (props) => {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		className,
		children,
		theme,
		...otherProps
	}
     = props;
	return (
		<form className={classNames(cls.form, {  }, [ cls[ theme ] ])} {...otherProps}>
			{children}
		</form>
	);
};
export default MyForm;

