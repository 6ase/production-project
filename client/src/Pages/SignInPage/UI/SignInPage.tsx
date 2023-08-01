import React, { useCallback, useState } from 'react';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';
import { ErrorMsgComponent } from 'Shared/UI/ErrorMsgComponent';

import { useDispatch } from 'react-redux';

import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';

import { useSelector } from 'react-redux';
import { getUserInfo } from 'Entities/Redux/Config';
import { loginByEmail } from 'Features/services/AuthService';

const SignInPage = () => {
	const { t } = useTranslation();
	const [ input, setInput ] = useState({
		email: '',
		password: '',
	});
	
	const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => 
		setInput((prev) => ({ ...prev, [ e.target.name ]: e.target.value })), [ setInput ]);
	const dispatch = useDispatch();
	const user = useSelector(getUserInfo);

	const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch<any>(loginByEmail(input));
	};
	
	return (
		<MyForm onSubmit={submitHandler} >
			<h1>{t('Authorization')}</h1>
			{user.error? <h1>{user.error}</h1>:''}
			<MyInput name='email' placeholder='example@google.com' type='email' onChange={changeHandler} value={ input.email } />
			<MyInput name='password' placeholder='Пароль' type='password' onChange={changeHandler} value={ input.password }/>
			<Button theme='inverseThemeButtons' disabled={user.isLoading}>{t('SignIn')}</Button>
		</MyForm>
	);
};

export default SignInPage;