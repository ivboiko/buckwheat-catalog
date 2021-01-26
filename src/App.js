import React, {useEffect} from 'react';
import './index.scss';
import Header from './components/Header/Header';
import MainApp from './components/MainApp/MainApp';
import {connect} from 'react-redux';
import {getThemeFromStorage, theme, toggleTheme} from './redux/reducers/app-reducer';
import classNames from 'classnames';

const App = ({appTheme, toggleTheme}) => {
  const appWrapperClassName = classNames(
    "app-wrapper",
    {
      'app-light-wrapper': appTheme === theme.light,
      'app-dark-wrapper': appTheme === theme.dark,
    },
  );

  useEffect(() => {
    let themeFromStorage = getThemeFromStorage();
    if (themeFromStorage) {
      toggleTheme(themeFromStorage);
    } else {
      toggleTheme(theme.light);
    }
  }, [toggleTheme]);

  return (
    <div className={appWrapperClassName}>
      <Header appTheme={appTheme} />
      <MainApp appTheme={appTheme} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  appTheme: state.appTheme,
});

export default connect(mapStateToProps, {toggleTheme})(App);
