import React, { useRef, useState, useLayoutEffect } from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";
import "./GraphicBuckwheat.scss";
import DataPicker from "../../../common/DataPicker/DataPicker";

const GraphicBuckwheat = ({data, onSetPeriod, appTheme}) => {
  const targetRef = useRef();
  const [isGraphicReady, setIsGraphicReady] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  const test_dimensions = () => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
    setIsGraphicReady(true);
  };

  const RESET_TIMEOUT = 100;

  useLayoutEffect(test_dimensions, []);

  let movement_timer = null;

  window.addEventListener("resize", () => {
    clearInterval(movement_timer);
    setIsGraphicReady(false);
    movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT);
  });

  if (!isGraphicReady) {
    return <div ref={targetRef} className="graphic-container" />;
  }

  const initialButtonsData = [
    {
      id: 1,
      value: "Тиждень",
      isActive: false,
      onClickHandler: () => onSetPeriod('week'),
    },
    {
      id: 2,
      value: "Місяць",
      isActive: true,
      onClickHandler: () => onSetPeriod('month'),
    },
    {
      id: 3,
      value: "Рік",
      isActive: false,
      onClickHandler: () => onSetPeriod('year'),
    },
  ];

  return (
    <>
      <div className="graphic-filters">
        <DataPicker initialData={initialButtonsData} appTheme={appTheme} />
      </div>
      <div className="graphic__container">
        <LineChart width={dimensions.width - 30} height={200} data={data}>
          <Line
            type="monotone"
            dataKey="priceForPack"
            stroke="#1D6EEF"
            strokeWidth={2}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={<CustomizedAxisTick axis="x" />}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={<CustomizedAxisTick axis="y" />}
          />
          <Tooltip cursor={false} />
        </LineChart>
      </div>
    </>
  );
};

export default GraphicBuckwheat;
