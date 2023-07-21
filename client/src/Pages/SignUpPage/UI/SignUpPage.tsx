import React, { useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SignUpPage.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';
import ErrorMsgComponent, { ErrorMsgComponentProps } from 'Shared/UI/ErrorMsgComponent/UI/ErrorMsgComponent';


export interface ServerErr {
	msg: ErrorMsgComponentProps
}


const SignUpPage = () => {
	const { t } = useTranslation();
	const [ input, setInput ] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const [ serverResponse, setServerResponse ] = useState(null);
	const backendURL = 'http://localhost:4000/user/signup';
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
		setInput((prev)=>({ ...prev, [ e.target.name ]: e.target.value }));
	};
	const submitHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		const response = await fetch(backendURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(input),
			credentials: 'include',
		});
		if(response.ok) setServerResponse([ `Регистрация прошла успешно!
		 На ${input.email} отправлена инструкция по активации аккаунта` ]);
		else {
			const err = (await response.json()).error;
			if( typeof err === 'string'){
				setServerResponse([ err ]);
				console.log(err);
			}
			else setServerResponse(err.map((err:ServerErr) => err.msg ));
		}
	};
	return (
		<MyForm onSubmit={submitHandler} >
			{ serverResponse? <ErrorMsgComponent error={serverResponse}/> :''}
			<h1>{t('SignUp')}</h1>
			<MyInput name='name' placeholder='Имя' type='text' 
				value={input.name} onChange={changeHandler} />
			<MyInput name='email' placeholder='example@google.com' type='email' 
				value={input.email} onChange={changeHandler} />
			<MyInput name='password' placeholder='Пароль' type='password'
				value={input.password} onChange={changeHandler} />
			<MyInput name='confirmPassword' placeholder='Пароль ещё раз' type='password'
				value={input.confirmPassword} onChange={changeHandler} />
			<Button theme='inverseThemeButtons'>{t('SignUp')}</Button>
		</MyForm>
	);
};

export default SignUpPage;