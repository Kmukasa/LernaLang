import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HistoryIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || "800px"}
      height={height || "800px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.5a6.467 6.467 0 00-3.32.91 6.537 6.537 0 00-2.264 2.26l-.08.143 2.644-.758.413 1.442-5.105 1.464-1.364-4.754 1.442-.414.658 2.294.091-.165.006-.01a8.037 8.037 0 012.792-2.791A8 8 0 116.266 17.58l1.075-1.047A6.5 6.5 0 1012 5.5z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 12.309V8h1.5v3.687l2.752 2.752-1.061 1.06-3.191-3.19z"
        fill={color || "#000"}
      />
    </Svg>
  );
};

export default HistoryIcon;
