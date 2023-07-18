import React, { useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SignUpPage.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';
import { json } from 'stream/consumers';

const SignUpPage = () => {
	const { t } = useTranslation();
	const [ input, setInput ] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});
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
		if(response.ok) console.log(await response.json());
		else console.log((await response.json()).error);
	};
	return (
		<MyForm onSubmit={submitHandler} >
			<h1>{t('SignUp')}</h1>
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