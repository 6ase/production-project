import React, { useState } from 'react';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';
import ErrorMsgComponent from 'Shared/UI/ErrorMsgComponent/UI/ErrorMsgComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from 'Entities/Redux/Config';
import { signUpByEmail } from 'Features/services/AuthService';
import Text from 'Shared/UI/Text/UI/Text';

const SignUpPage = () => {
	const { t } = useTranslation();
	const [ input, setInput ] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
		setInput((prev)=>({ ...prev, [ e.target.name ]: e.target.value }));
	};
	const dispatch = useDispatch();
	const user = useSelector(getUserInfo);
	const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch<any>(signUpByEmail(input));
	};
	
	return (
		<MyForm onSubmit={submitHandler} >
			<Text tittle={t('SignUp')}/>
			{user.error? <ErrorMsgComponent error={user.error}/>:''} 
			<MyInput name='name' placeholder='Имя' type='text' 
				value={input.name} onChange={changeHandler} />
			<MyInput name='email' placeholder='example@google.com' type='email' 
				value={input.email} onChange={changeHandler} />
			<MyInput name='password' placeholder='Пароль' type='password'
				value={input.password} onChange={changeHandler} />
			<MyInput name='confirmPassword' placeholder='Пароль ещё раз' type='password'
				value={input.confirmPassword} onChange={changeHandler} />
			<Button theme='inverseThemeButtons' disabled={user.isLoading}>{t('SignUp')}</Button>
		</MyForm>
	);
};

export default SignUpPage;