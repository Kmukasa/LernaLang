import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

function ClockIcon({ height, width }) {
  return (
    <Svg
      width={width || "800px"}
      height={height || "800px"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M11.9 5.9L11.9 11.9 12 12 14.1 14.1" />
        <Circle cx={12} cy={12} data-name="Circle" r={10} />
      </G>
    </Svg>
  );
}

export default ClockIcon;
