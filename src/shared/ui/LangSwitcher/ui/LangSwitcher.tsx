import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const handleToggle = () =>
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      onClick={handleToggle}
      variant={ButtonVariants.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
