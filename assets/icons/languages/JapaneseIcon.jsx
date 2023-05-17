import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function JapaneseIcon({ width, height }) {
  return (
    <Svg
      width={width || 72}
      height={height || 72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={72}
        height={72}
      >
        <Circle cx={36} cy={36} r={36} fill="#D9D9D9" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#F5F7F8" d="M0 0H72V72H0z" />
        <Circle cx={36} cy={36} r={16} fill="#DD2033" />
      </G>
    </Svg>
  );
}

export default JapaneseIcon;
