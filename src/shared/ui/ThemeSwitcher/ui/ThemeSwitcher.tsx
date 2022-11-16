import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './ThemeSwitcher.module.scss';

import DarkIcon from 'shared/assets/icons/DarkIcon.svg';
import LightIcon from 'shared/assets/icons/LightIcon.svg';
import { Button, ButtonVariants } from '../../Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant={ButtonVariants.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
