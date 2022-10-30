import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/ClassNames/classNames';

import { useTheme } from 'app/providers/ThemeProvider';

import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  console.log('🚀 ~ file: App.tsx ~ line 13 ~ App ~ theme', theme);

  return (
    <div className={classNames('app', { test: true }, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}> change theme</button>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
