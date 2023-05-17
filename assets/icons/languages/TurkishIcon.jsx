import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function TurkishIcon({ height, width }) {
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
        <Path transform="rotate(-90 0 72)" fill="#DD2033" d="M0 72H72V144H0z" />
        <Path
          d="M45.894 27.67l-1.021 6.556-5.893 2.415 5.68 3.197.52 6.659 4.402-5.062 6.343 2.183-2.88-6.027 3.321-5.609-6.31.855-4.162-5.166z"
          fill="#F5F7F8"
        />
        <Path
          d="M40.349 25.587a12.386 12.386 0 00-6.815-2.03c-6.873 0-12.444 5.572-12.444 12.445s5.571 12.444 12.444 12.444c2.513 0 4.852-.745 6.808-2.026A15.964 15.964 0 0128.2 52c-8.836 0-16-7.163-16-16s7.164-16 16-16c4.86 0 9.214 2.167 12.149 5.587z"
          fill="#F5F7F8"
        />
      </G>
    </Svg>
  );
}

export default TurkishIcon;
