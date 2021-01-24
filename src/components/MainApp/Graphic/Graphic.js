import React from 'react';
import './Graphic.scss';
import GraphicBuckwheat from './GraphicBuckwheat';
import DataBuckwheat from './DataBuckwheat';
import classNames from 'classnames';
import {theme} from '../../../redux/reducers/app-reducer';
import GraphicPlug from './GraphicPlug/GraphicPlug';

const Graphic = ({appTheme}) => {
  const graphicClassName = classNames(
    "graphic app-child",
    {
      "graphic-light": appTheme === theme.light,
      "graphic-dark": appTheme === theme.dark,
    },
  );


  return (
    // <div className={graphicClassName}>
    //   <GraphicBuckwheat appTheme={appTheme} />
    //   <DataBuckwheat
    //     storeName="VARUS"
    //     itemName="Крупа гречана ядриця швидкорозварювана"
    //     price={42.99}
    //     percent={-12}
    //     appTheme={appTheme} />
    // </div>
    <GraphicPlug appTheme={appTheme} />
  );
};

export default Graphic;
