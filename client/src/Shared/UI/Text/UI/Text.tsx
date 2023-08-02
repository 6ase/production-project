import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Text.module.scss';


interface TextProps {
    className?: string,
    text?: string,
    theme?: string,
    tittle?: string
}
export const Text = ({ className, text, theme, tittle }:TextProps) => {

	return (
		<div className={classNames(cls.Text, { [ cls[ theme ] ]: true }, [ className ])}>
			{tittle && <p className='tittle'>{tittle}</p>}
			{text && <p className='text'>{text}</p>}
		</div>
	);
};

export default Text;