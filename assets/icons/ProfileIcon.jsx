import * as React from "react";
import Svg, { Path } from "react-native-svg";

ProfileIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || "800px"}
      height={height || "800px"}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 00380 2005a6 6 0 10-9.758 4.673c-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327"
        transform="translate(-420 -2159) translate(56 160)"
        fill={color || "#000"}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default ProfileIcon;
