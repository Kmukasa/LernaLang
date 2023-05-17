import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function SwahiliIcon({ width, height }) {
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
        <Path d="M72 0H0v72L72 0z" fill="#009B77" />
        <Path d="M72 72V0L0 72h72z" fill="#0091DA" />
        <Path
          transform="rotate(45 50.85 -.063)"
          fill="#FBD381"
          d="M50.8492 -0.0625H80.8492V71.9375H50.8492z"
        />
        <Path
          transform="scale(-1 1) rotate(-45 -13.5 90.32)"
          fill="#31373D"
          d="M0 0H18V72H0z"
        />
      </G>
    </Svg>
  );
}

export default SwahiliIcon;
