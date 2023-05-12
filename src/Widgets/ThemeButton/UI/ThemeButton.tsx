import React from 'react';
import { useTheme } from 'App/Providers/ThemeProvider';
import { Theme } from 'App/Providers/ThemeProvider/Lib/ThemeContext';
import { classNames } from 'Shared/Lib/classNames';
import cls from './ThemeButton.module.scss'

const ThemeButton = () => {
    const { theme, changeTheme } = useTheme();
    return (
        <div className={classNames(cls.btn)}>
        { theme === Theme.LIGHT
            ?<button onClick={changeTheme}>🌙</button>
            :<button onClick={changeTheme}>🌞</button>
        }
        </div>
    );
};

export default ThemeButton;
