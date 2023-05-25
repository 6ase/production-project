import React from 'react';
import { useTheme } from 'App/Providers/ThemeProvider';
import { Theme } from 'App/Providers/ThemeProvider/Lib/ThemeContext';
import DayIcon from 'Shared/assets/icons/DayIcon.svg';
import NightIcon from 'Shared/assets/icons/NightIcon.svg';
import Button from 'Shared/UI/SwitchThemeButton/UI/Button';

export const ThemeSwitcher = () => {   
	const { theme, changeTheme } = useTheme();
	return (
    
		<Button onClick={changeTheme} theme='switcher' >
			{theme === Theme.DARK? <DayIcon/>:<NightIcon/>} 
		</Button>
	);
};

