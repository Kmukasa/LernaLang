import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

function LadderIcon({ height, width }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.11 14.11v10.109M24.219 24.219h-10.11M4 4v10.11M14.11 14.11H4"
        stroke="#0601B4"
        strokeWidth={6.06568}
        strokeLinecap="round"
      />
      <Ellipse
        cx={11.4406}
        cy={6.52737}
        rx={2.6689}
        ry={2.52737}
        fill="#0601B4"
        fillOpacity={0.5}
      />
      <Ellipse
        cx={21.8331}
        cy={16.6368}
        rx={2.6689}
        ry={2.52737}
        fill="#0601B4"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default LadderIcon;
