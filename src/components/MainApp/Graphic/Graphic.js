import React, { useState, useEffect } from "react";
import "./Graphic.scss";
import GraphicBuckwheat from "./GraphicBuckwheat";
import DataBuckwheat from "./DataBuckwheat";
import { usePeriodGraphic } from "./usePeriodGraphic";
import Spinner from "../../common/Spinner";
import { useSelector } from "react-redux";

const Graphic = () => {
  const [bestPrise, setBestPrise] = useState(null);

  const year = usePeriodGraphic();
  const month = usePeriodGraphic();
  const week = usePeriodGraphic();

  const period = useSelector((state) => state.priceGraphicPeriod);
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
    } else if (period === "month") {
      setBestPrise(month.increasePrise(shopName, month.price));
    } else if (period === "year") {
      setBestPrise(year.increasePrise(shopName, year.price));
    }
  }, [week.loading, month.loading, year.loading, period]);

  if (week.loading) {
    console.log(week.price)
  }

  return (
    <div className="graphic app-child">
      {!year.loading || !month.loading || !week.loading ? (
        <div className="graphic-spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <GraphicBuckwheat />
          <DataBuckwheat {...bestPrise} />
        </>
      )}
    </div>
  );
};

export default Graphic;
