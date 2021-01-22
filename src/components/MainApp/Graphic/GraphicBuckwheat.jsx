import React, { useRef, useState, useLayoutEffect } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import "./DataBuckwheat.scss";
import data from "./data.json";
import Spinner from "./Spinner";

const GraphicBuckwheat = () => {
  const targetRef = useRef();
  const [isMounting, setIsMounting] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
    setIsMounting(true);
  }, []);

  if (!isMounting) {
    return (
      <div className="graphic-container">
        <div ref={targetRef} className="graphic__container-inner">
          <Spinner />
        </div>
      </div>
    );
  }

  return (

      <div className="graphic__container">
        <LineChart
          width={dimensions.width-30}
          height={300}
          data={data}
        >
          <Line type="monotone" dataKey="Ашан" stroke="#1D6EEF" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
  );
};

export default GraphicBuckwheat;
