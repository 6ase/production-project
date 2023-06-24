import React from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './SignUpPage.module.scss';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';
import { useTranslation } from 'react-i18next';
import { MyForm } from 'Shared/UI/MyForm';
import { MyInput } from 'Shared/UI/Modal/MyInput';

const SignUpPage = () => {
	const { t } = useTranslation();
	return (
		<MyForm >
			<h1>{t('SignUp')}</h1>
			<MyInput name='email' placeholder='example@google.com' type='email' />
			<MyInput name='password' placeholder='Пароль' type='password'/>
			<MyInput name='passwordConfirm' placeholder='Пароль ещё раз' type='password'/>
			<Button theme='inverseThemeButtons'>{t('SignUp')}</Button>
		</MyForm>
	);
};

export default SignUpPage;