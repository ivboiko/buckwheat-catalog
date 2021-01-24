import classNames from 'classnames';
import {theme} from '../redux/reducers/app-reducer';

export const getTextClassName = (baseClassName, appTheme) => classNames(
  baseClassName,
  {
    "light-text": appTheme === theme.light,
    "dark-text": appTheme === theme.dark,
  },
);
