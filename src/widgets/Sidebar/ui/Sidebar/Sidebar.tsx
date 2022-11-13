import { useState } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
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
      <button onClick={handleToggle}>toggle</button>
      <div className={cls.swicthers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
