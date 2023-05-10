import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MusicIcon({ height, width, color }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4a1 1 0 00-1.179-.984l-11 2A1 1 0 007 6v10.17A3 3 0 109 19v-8.165l9-1.637v4.973A3 3 0 1020 17V3.999zm-2 13a1 1 0 10-2 0 1 1 0 002 0zM7 19a1 1 0 10-2 0 1 1 0 002 0zM18 7.165L9 8.802V6.835l9-1.637v1.967z"
        fill={color}
      />
    </Svg>
  );
}

export default MusicIcon;
