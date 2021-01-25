import React, {useEffect, useState} from 'react';
import './Graphic.scss';
import GraphicBuckwheat from './GraphicBuckwheat';
import DataBuckwheat from './DataBuckwheat';
import {usePeriodGraphic} from './usePeriodGraphic';
import Spinner from '../../common/Spinner';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import {theme} from '../../../redux/reducers/app-reducer';
import GraphicPlug from './GraphicPlug/GraphicPlug';

const Graphic = ({appTheme}) => {
  const [bestPrise, setBestPrise] = useState(null);
  const [dataGraphic, setDataGraphic] = useState([]);
  const [period, setPeriod] = useState('month');

  const year = usePeriodGraphic();
  const month = usePeriodGraphic();
  const week = usePeriodGraphic();

  const shopName = useSelector((state) => state.shop);

  useEffect(() => {
    year.request('/sort/year').catch((err) => {
      console.log(err);
    });

    month.request('/sort/month').catch((err) => {
      console.log(err);
    });

    week.request('/sort/week').catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if (period === 'week') {
      setBestPrise(week.increasePrise(shopName, week.price));
      setDataGraphic(week.getDataGraphic(shopName));
    } else if (period === 'month') {
      setBestPrise(month.increasePrise(shopName, month.price));
      setDataGraphic(month.getDataGraphic(shopName));
    } else if (period === 'year') {
      setBestPrise(year.increasePrise(shopName, year.price));
      setDataGraphic(year.getDataGraphic(shopName));
    }
  }, [week.loading, month.loading, year.loading, period, shopName]);

  const graphicClassName = classNames(
    'graphic app-child',
    {
      'graphic-light': appTheme === theme.light,
      'graphic-dark': appTheme === theme.dark,
    },
  );
  return (
    <div className={graphicClassName}>
      {!year.loading || !month.loading || !week.loading ? (
        <Spinner/>
      ) : (
        <>
          <GraphicBuckwheat data={dataGraphic} onSetPeriod={setPeriod} appTheme={appTheme} period={period}/>
          <DataBuckwheat {...bestPrise} appTheme={appTheme}/>
        </>
      )}
    </div>
    // Graphic plug for test
    // <GraphicPlug appTheme={appTheme} />
  );
};

export default Graphic;
