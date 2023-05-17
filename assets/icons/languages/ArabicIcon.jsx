import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function ArabicIcon({ width, height }) {
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
          fill="#31373D"
          d="M0.00012207 72.0001H24.00012207V144.0001H0.00012207z"
        />
        <Path
          transform="rotate(-90 0 48)"
          fill="#F5F7F8"
          d="M0.00012207 47.9999H24.00012207V119.9999H0.00012207z"
        />
        <Path
          transform="rotate(-90 0 24)"
          fill="#DD2033"
          d="M0.00012207 23.9999H24.00012207V95.9999H0.00012207z"
        />
        <Path
          d="M31 16h4a6 6 0 016 6v5.083c2.838.476 5 2.944 5 5.917v19l-8.514-3.406a4 4 0 00-2.972 0L26 52V33a6.002 6.002 0 015-5.917V16z"
          fill="#F1B434"
        />
        <Path
          d="M33.801 51.512L28 55.5h16.5l-6.26-4.05a4 4 0 00-4.439.062z"
          fill="#F1B434"
        />
      </G>
    </Svg>
  );
}

export default ArabicIcon;
