import React from 'react';
import './DataBuckwheat.scss';
import arrowDown from '../../../assets/imgs/Arrow_Down.png';

const DataBuckwheat = () => {
    return (
        <div className="DataBlock">

            <div className="NameBrand">VARUS</div>
            
            <div className="description" >Крупа гречана ядриця швидкорозварювана</div>

            <div className="GoodsNumbers">

                <div className="DataPrice">₴42.99</div>

                <div className="persent">-12%<img className="arrow" src={arrowDown}/></div>

            </div>

        </div>
    );
};

export default DataBuckwheat;