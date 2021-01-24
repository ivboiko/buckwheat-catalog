import React, { useState, useEffect } from "react";
import "./Graphic.scss";
import GraphicBuckwheat from "./GraphicBuckwheat";
import DataBuckwheat from "./DataBuckwheat";
import { usePeriodGraphic } from "./usePeriodGraphic";
import Spinner from "../../common/Spinner";
import { useSelector } from "react-redux";

const Graphic = () => {
  const [bestPrise, setBestPrise] = useState(null);
  const [dataGraphic, setDataGraphic] = useState([]);
  const [period, setPeriod] = useState("week");

  const year = usePeriodGraphic();
  const month = usePeriodGraphic();
  const week = usePeriodGraphic();

  const shopName = useSelector((state) => state.shop);

  useEffect(() => {
    year.request("/sort/year").catch((err) => {
      console.log(err);
    });

    month.request("/sort/month").catch((err) => {
      console.log(err);
    });

    week.request("/sort/week").catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if (period === "week") {
      setBestPrise(week.increasePrise(shopName, week.price));
      setDataGraphic(week.getDataGraphic(shopName));
    } else if (period === "month") {
      setBestPrise(month.increasePrise(shopName, month.price));
      setDataGraphic(month.getDataGraphic(shopName));
    } else if (period === "year") {
      setBestPrise(year.increasePrise(shopName, year.price));
      setDataGraphic(year.getDataGraphic(shopName));
    }
  }, [week.loading, month.loading, year.loading, period, shopName]);

  // if (week.loading) {
  //   console.log(week.getDataGraphic(shopName));
  // }

  return (
    <div className="graphic app-child">
      {!year.loading || !month.loading || !week.loading ? (
        <Spinner />
      ) : (
        <>
          <GraphicBuckwheat data={dataGraphic} onSetPeriod={setPeriod} />
          <DataBuckwheat {...bestPrise} />
        </>
      )}
    </div>
  );
};

export default Graphic;
