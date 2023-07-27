import React, { useCallback, useState } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SignInPage.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';
import { ServerErr } from 'Pages/SignUpPage/UI/SignUpPage';
import { ErrorMsgComponent } from 'Shared/UI/ErrorMsgComponent';
import AuthService from 'Features/services/AuthService';
import { useDispatch } from 'react-redux';
import { userActions } from 'Entities/Redux/Slices/UserSlice';

const SignInPage = () => {
	const { t } = useTranslation();
	const [ serverResponse, setServerResponse ] = useState(null);
	const [ input, setInput ] = useState({
		email: '',
		password: '',
	});
	
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => 
		setInput((prev) => ({ ...prev, [ e.target.name ]: e.target.value })); 
	const dispatch = useDispatch();
	const setUser = useCallback((user) => dispatch(userActions.setUserInfo(user)), [ dispatch ]);
	const submitHandler = async(e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await AuthService.login(input);
			setServerResponse([ `Здравствуйте ${response.data.user.name}!` ]);
			localStorage.setItem('token', response.data.accessToken);
			setUser(response.data.user);
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
			<h1>{t('Authorization')}</h1>
			<MyInput name='email' placeholder='example@google.com' type='email' onChange={changeHandler} value={ input.email } />
			<MyInput name='password' placeholder='Пароль' type='password' onChange={changeHandler} value={ input.password }/>
			<Button theme='inverseThemeButtons'>{t('SignIn')}</Button>
		</MyForm>
	);
};

export default SignInPage;