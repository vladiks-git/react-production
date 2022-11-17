import { useState } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.swicthers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
