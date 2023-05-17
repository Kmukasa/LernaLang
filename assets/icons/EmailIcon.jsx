import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EmailIcon({ width, height, color }) {
  return (
    <Svg
      width={width || "800px"}
      height={height || "800px"}
      viewBox="0 -2.5 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M262 764.291l-8 7.027-8-7.037V764h16v.291zM246 775v-8.055l8 7.035 8-7.027V775h-16zm-2 2h20v-15h-20v15z"
        transform="translate(-300 -922) translate(56 160)"
        fill={color || "#000"}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default EmailIcon;
