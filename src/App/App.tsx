import React from 'react';
import './Styles/index.scss'
import { useTheme } from './Providers/ThemeProvider';
import { classNames } from 'Shared/Lib/classNames';
import { Router } from './Providers/Router';
import { Navbar } from 'Widgets/Navbar';

const App = () => {

const { theme } = useTheme();

    return (
        <div className={classNames('app', { }, [ theme ])}>
        <Navbar/>
        <Router/>
        </div>
        
    );
};

export default App;