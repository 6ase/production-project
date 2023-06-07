import React, { useCallback, useEffect } from 'react';
import { classNames } from 'Shared/Lib/classNames';
import cls from './Modal.module.scss';

type ModalProps = {
	isActive:boolean;
	setActive: (state:boolean) => void;
}
const Module:React.FC<ModalProps> = ({ isActive, setActive }) => {

	const onContentClick = useCallback((e:React.MouseEvent) => {
		e.stopPropagation();
	}, []);

	const closeModal = useCallback(() => setActive(false), [ setActive ]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if(e.key === 'Escape') closeModal();
	}, [ closeModal ]);
	
	useEffect(() => {
		if(isActive) {
			window.addEventListener('keydown', onKeyDown);
			window.removeEventListener('keydown', onkeydown);
		}
	}, [ isActive, onKeyDown ]);
	return (
		<div className={classNames(cls.background, { [ cls.active ]: isActive })} 
			onClick={closeModal}>
			<div className={classNames(cls.content, { [ cls.contentOpen ]: isActive })} 
				// eslint-disable-next-line i18next/no-literal-string
				onClick={onContentClick}><h1>Тут будет форма</h1></div>
		</div>
	);
};

export default Module;