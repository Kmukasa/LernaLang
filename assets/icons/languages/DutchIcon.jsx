import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function DutchIcon({ width, height }) {
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
        <Path
          transform="rotate(-90 0 72)"
          fill="#004692"
          d="M0.00012207 72.0001H24.00012207V144.0001H0.00012207z"
        />
        <Path
          transform="rotate(-90 0 48)"
          fill="#F5F7F8"
          d="M0.00012207 47.9999H24.00012207V119.9999H0.00012207z"
        />
        <Path
          transform="rotate(-90 0 24)"
          fill="#A00009"
          d="M0.00012207 23.9999H24.00012207V95.9999H0.00012207z"
        />
      </G>
    </Svg>
  );
}

export default DutchIcon;
