import React, { useCallback, useMemo, useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SignUpPage.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';
import ErrorMsgComponent, { ErrorMsgComponentProps } from 'Shared/UI/ErrorMsgComponent/UI/ErrorMsgComponent';
import AuthService from 'Features/services/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from 'Entities/Redux/Config';
import { userActions } from 'Entities/Redux/Slices/UserSlice';


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
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
		setInput((prev)=>({ ...prev, [ e.target.name ]: e.target.value }));
	};
	const dispatch = useDispatch();
	const setUser = useCallback((user) => dispatch(userActions.setUserInfo(user)), [ dispatch ]);
	const submitHandler = async(e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await AuthService.registration(input);
			setServerResponse([ `Регистрация прошла успешно!
					 На ${input.email} отправлена инструкция по активации аккаунта` ]);
			localStorage.setItem('token', response.data.refreshToken);
			setUser(response.data.user);
			console.log(response.data.user);
		} catch (error) {
			
			const err = error.response.data.error;
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