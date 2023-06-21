import React, { useCallback, useEffect } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Modal.module.scss';
import { useDispatch } from 'react-redux';
import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';

type ModalProps = {
	isActive: boolean;
}
const Module:React.FC<ModalProps> = ({ isActive }) => {

	const onContentClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);
	const dispatch = useDispatch();
	const changeActive = () => dispatch(modalActiveActions.changeActive());
	

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onKeyDown = (e: KeyboardEvent) => {
		if(e.key === 'Escape') changeActive();
	};
	
	useEffect(() => {
		if(isActive) {
			window.addEventListener('keydown', onKeyDown);
		} else window.removeEventListener('keydown', onKeyDown);
	}, [ isActive, onKeyDown ]);
	return (
		<div className={classNames(cls.background, { [ cls.active ]: isActive })} 
			onClick={changeActive}>
			<div className={classNames(cls.content, { [ cls.contentOpen ]: isActive })} 
				// eslint-disable-next-line i18next/no-literal-string
				onClick={onContentClick}><h1>Тут будет форма</h1></div>
		</div>
	);
};

export default Module;