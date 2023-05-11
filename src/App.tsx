import React from 'react';
import './Styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageLazy } from './Components/Pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './Components/Pages/AboutPage/AboutPage.lazy';
import { Suspense } from 'react';
import Loading from './Components/Loading/Loading'

import { Theme } from './Components/Context/Theme/ThemeContext';
import { useTheme } from './Components/Context/Theme/UseTheme';
import { classNames } from './Components/helpers/classNames/classNames';

const App = () => {

const { theme, changeTheme } = useTheme();

    return (
        <div className={classNames('app', { }, [ theme ])}>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>About</Link>
        
        <Suspense fallback={<Loading/>} >
        <Routes>
            <Route path='/' element={<MainPageLazy/>}/>
            <Route path='/about' element={<AboutPageLazy/>}/>
        </Routes>
        {theme === Theme.LIGHT
        ?<button onClick={changeTheme}>🌙</button>
        :<button onClick={changeTheme}>🌞</button>
        }
        
        </Suspense>
        </div>
        
    );
};

export default App;