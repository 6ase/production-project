import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Modal.module.scss';
import { useDispatch } from 'react-redux';
import { modalActiveActions } from 'Entities/Redux/Slices/ModalActiveSlice';
import { userActions } from 'Entities/Redux/Slices/UserSlice';

type ModalProps = {
	isActive: boolean;
	children: ReactNode
}
const Module:React.FC<ModalProps> = ({ isActive, children }) => {
    
	const dispatch = useDispatch();
	const changeActive = useCallback(() => {
		dispatch(modalActiveActions.changeActive());
		dispatch(userActions.clearError());
	}, [ dispatch ]);
	
	const onContentClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);
	
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if(e.key === 'Escape') changeActive();
	}, [ changeActive ]);
	
	useEffect(() => {
		if(isActive) {
			window.addEventListener('keydown', onKeyDown);
		}  
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [ isActive, onKeyDown ]);
	
	return (
		<div className={classNames(cls.background, { [ cls.active ]: isActive })} 
			onClick={changeActive}>
			<div className={classNames(cls.content, { [ cls.contentOpen ]: isActive })} 
				// eslint-disable-next-line i18next/no-literal-string
				onClick={onContentClick}>{ children }</div>
		</div>
	);
};

export default Module;