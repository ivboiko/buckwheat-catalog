import React from 'react';
import classNames from 'classnames';
import plugLight from '../../../../assets/imgs/Buckwheat_plug.svg';
import plugDark from '../../../../assets/imgs/Buckwheat_plug_dark.svg';
import {theme} from '../../../../redux/reducers/app-reducer';
import './GraphicPlug.scss';

const GraphicPlug = ({appTheme}) => {
  const plugClassName = classNames(
    "plug graphic app-child",
    {
      "plug-light" : appTheme === theme.light,
      "plug-dark" : appTheme === theme.dark,
    },
  );

  const plugTextClassName = classNames(
    "plug-text",
    {
      "plug-light-text": appTheme === theme.light,
      "plug-dark-text": appTheme === theme.dark,
    },
  );

  const plugSrc = appTheme === theme.light ? plugLight : plugDark;

  return (
    <div className={plugClassName}>
      <img src={plugSrc} alt="plug" />
      <div className={plugTextClassName}>
        Оберіть магазин зі списку
        для докладнішої аналітики
      </div>
    </div>
  );
};

export default GraphicPlug;
