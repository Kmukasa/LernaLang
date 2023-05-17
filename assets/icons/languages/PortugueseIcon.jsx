import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function PortugueseIcon({ width, height }) {
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
        <Path fill="#008259" d="M0 0H72V72H0z" />
        <Path d="M36 14l30 22-30 22L6 36l30-22z" fill="#F1B434" />
        <Path
          d="M36.5 50C43.956 50 50 43.732 50 36s-6.044-14-13.5-14S23 28.268 23 36s6.044 14 13.5 14z"
          fill="#004692"
        />
        <Path
          d="M23.202 33.576A24.584 24.584 0 0128.5 33c7.935 0 15.102 3.798 19.803 9.8a14.292 14.292 0 001.655-5.686C44.448 31.48 36.868 28 28.5 28c-1.078 0-2.144.058-3.193.17a14.214 14.214 0 00-2.105 5.406z"
          fill="#F5F7F8"
        />
      </G>
    </Svg>
  );
}

export default PortugueseIcon;
