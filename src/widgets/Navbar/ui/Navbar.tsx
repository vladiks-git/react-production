import React from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'}>Main</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};
