import React from 'react';

import ThemeButton, { ThemeButtonStyle } from 'Shared/UI/SwitchThemeButton/UI/ThemeButton';
import { useTheme } from 'App/Providers/ThemeProvider';
import { Theme } from 'App/Providers/ThemeProvider/Lib/ThemeContext';
import DayIcon from 'Shared/assets/icons/DayIcon.svg';
import NightIcon from 'Shared/assets/icons/NightIcon.svg';

export const ThemeSwitcher = () => {   
	const { theme, changeTheme } = useTheme();
	return (
    
		<ThemeButton onClick={changeTheme} theme={ThemeButtonStyle.CLEAR}>
			{theme === Theme.DARK? <DayIcon/>:<NightIcon/>} 
		</ThemeButton>
	);
};

