import React, { useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SignInPage.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';
import { ServerErr } from 'Pages/SignUpPage/UI/SignUpPage';
import { ErrorMsgComponent } from 'Shared/UI/ErrorMsgComponent';

const SignInPage = () => {
	const { t } = useTranslation();
	const [ serverResponse, setServerResponse ] = useState(null);
	const [ input, setInput ] = useState({
		email: '',
		password: '',
	});
	const backendURL = 'http://localhost:4000/user/signin';
	
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => 
		setInput((prev) => ({ ...prev, [ e.target.name ]: e.target.value })); 
	const submitHandler = async(e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch(backendURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(input),
			credentials: 'include',
		});
		if(response.ok) {
			const answer = await response.json();
			console.log(answer);
			setServerResponse([ `Добро пожаловать ${answer.name}!` ]);
		}
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
			<h1>{t('Authorization')}</h1>
			<MyInput name='email' placeholder='example@google.com' type='email' onChange={changeHandler} value={ input.email } />
			<MyInput name='password' placeholder='Пароль' type='password' onChange={changeHandler} value={ input.password }/>
			<Button theme='inverseThemeButtons'>{t('SignIn')}</Button>
		</MyForm>
	);
};

export default SignInPage;