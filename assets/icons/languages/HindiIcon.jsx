import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function HindiIcon({ width, height }) {
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
          fill="#009B77"
          d="M0.00012207 72.0001H20.00012207V144.0001H0.00012207z"
        />
        <Path transform="rotate(-90 0 52)" fill="#F5F7F8" d="M0 52H32V124H0z" />
        <Path transform="rotate(-90 0 20)" fill="#FF9E42" d="M0 20H20V92H0z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49 36c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13zm-10.526 8.656A9.006 9.006 0 0136 45c-.858 0-1.688-.12-2.474-.344L36 41.88l2.474 2.775zm.362-.112a9.018 9.018 0 004.268-3.017l-3.816-.768-.452 3.785zm4.362-3.14A8.96 8.96 0 0045 36a8.96 8.96 0 00-1.802-5.404l-1.875 3.586L45 36l-3.678 1.819 1.876 3.585zm-.094-10.93a9.018 9.018 0 00-4.268-3.018l.452 3.785 3.816-.768zm-4.63-3.13L36 30.12l-2.474-2.775A9.005 9.005 0 0136 27c.858 0 1.688.12 2.474.344zm-5.31.112a9.017 9.017 0 00-4.268 3.017l3.816.768.452-3.785zm-4.362 3.14A8.96 8.96 0 0027 36a8.96 8.96 0 001.802 5.404l1.875-3.586L27 36l3.678-1.819-1.876-3.585zm.094 10.93a9.018 9.018 0 004.268 3.018l-.452-3.785-3.816.768z"
          fill="#004692"
        />
      </G>
    </Svg>
  );
}

export default HindiIcon;
