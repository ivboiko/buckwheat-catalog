import React from "react";

const CustomizedAxisTick = ({ x, y, payload, axis }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={axis === "x" ? 8 : 0}
        y={axis === "x" ? 0 : 4}
        dy={axis === "x" ? 16 : 0}
        fontFamily="Inter-Bold, serif"
        textAnchor="end"
        fontSize={12}
        fontWeight={600}
        fill="#808191"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
