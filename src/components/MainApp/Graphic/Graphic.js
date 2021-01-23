import React from 'react';
import './Graphic.scss';
import GraphicBuckwheat from './GraphicBuckwheat';
import DataBuckwheat from './DataBuckwheat';

const Graphic = () => {
  return (
    <div className="graphic app-child">
      <GraphicBuckwheat/>
      <DataBuckwheat/>
    </div>
  );
};

export default Graphic;
