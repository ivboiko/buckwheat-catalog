import React, { useRef, useState, useLayoutEffect } from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";
import "./GraphicBuckwheat.scss";
import data from "./data.json";

const GraphicBuckwheat = () => {
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
    return <div ref={targetRef} className="graphic-container"></div>;
  }

  return (
    <div className="graphic__container">
      <LineChart width={dimensions.width - 30} height={300} data={data}>
        <Line type="monotone" dataKey="Ашан" stroke="#1D6EEF" strokeWidth={2} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={<CustomizedAxisTick axis="x" />}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={<CustomizedAxisTick axis="y" />}
        />
        <Tooltip cursor={false}/>
      </LineChart>
    </div>
  );
};

export default GraphicBuckwheat;