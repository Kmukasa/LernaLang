import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SchoolIcon({ height, width, color }) {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill={color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21 10l-9-5-9 5 3 1.667M21 10l-3 1.667M21 10v0c.613.306 1 .933 1 1.618V17M6 11.667L12 15l6-3.333m-12 0v6L12 21l6-3.333v-6"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SchoolIcon;
