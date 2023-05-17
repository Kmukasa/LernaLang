import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TechIcon({ height, width, color }) {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 14 14"
      aria-hidden="true"
      fill={color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M11.8 10.6V3.396c0-.66-.536-1.196-1.196-1.196H3.396c-.66 0-1.196.536-1.196 1.196V10.6H1v.6c0 .334.266.6.595.6h10.81a.602.602 0 00.595-.6v-.6h-1.2zM3.4 3.4h7.2v5.4H3.4V3.4zM5.8 10h2.4v.6H5.8V10z" />
    </Svg>
  );
}

export default TechIcon;
