import React from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';

import { useTheme } from 'app/providers/ThemeProvider';

import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { test: true }, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
