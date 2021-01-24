import React from 'react';
import './ThemeSwitcher.scss';
import {connect} from 'react-redux';
import {theme, toggleTheme} from '../../../redux/reducers/app-reducer';

const ThemeSwitcher = ({appTheme, toggleTheme}) => {
  const changeTheme = () => {
    const newTheme = appTheme === theme.light ? theme.dark : theme.light;
    toggleTheme(newTheme);
  };

  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn" defaultChecked={true} onClick={changeTheme}/>
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler"/>
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appTheme: state.appTheme,
});

export default connect(mapStateToProps, {
  toggleTheme,
})(ThemeSwitcher);