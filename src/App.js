import React from 'react';
import './index.scss';
import Header from './components/Header/Header';
import MainApp from './components/MainApp/MainApp';
import {connect} from 'react-redux';
import {theme} from './redux/reducers/app-reducer';
import classNames from 'classnames';

const App = ({appTheme}) => {
  const appWrapperClassName = classNames(
    "app-wrapper",
    {
      'app-light-wrapper': appTheme === theme.light,
      'app-dark-wrapper': appTheme === theme.dark,
    },
  );

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

export default connect(mapStateToProps, null)(App);
