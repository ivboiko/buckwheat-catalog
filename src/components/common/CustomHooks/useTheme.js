import {getThemeFromStorage, theme, toggleTheme} from '../../../redux/reducers/app-reducer';
import {useDispatch} from 'react-redux';

export const useTheme = () => {
  const dispatch = useDispatch();

  return () => {
    let themeFromStorage = getThemeFromStorage();
    let newTheme = theme.light;

    if (themeFromStorage) {
      newTheme = themeFromStorage === theme.light ? theme.dark : theme.light;
    }

    localStorage.setItem('theme', newTheme);
    dispatch(toggleTheme(newTheme));
  };
};
