import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SendIcon({ height, width, color }) {
  return (
    <Svg
      width={height}
      height={width}
      viewBox="0 0 34 34"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M28.8 5.2a2.054 2.054 0 00-2.082-.497L5.993 11.617a2.04 2.04 0 00-.326 3.754l8.599 4.25 4.25 8.627a2.042 2.042 0 001.827 1.12h.142a2.025 2.025 0 001.785-1.417l7.012-20.67a1.997 1.997 0 00-.481-2.082zM6.87 13.571l18.092-6.035L14.918 17.58 6.87 13.57zm13.572 13.557l-4.023-8.047L26.463 9.038l-6.02 18.091z"
        fill="#000"
      />
    </Svg>
  );
}

export default SendIcon;
