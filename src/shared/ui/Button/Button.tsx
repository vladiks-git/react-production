import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariants {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
}

export const Button: React.FC<IButtonProps> = ({
    className,
    children,
    variant,
    ...props
}) => {
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...props}
        >
            {children}
        </button>
    );
};
