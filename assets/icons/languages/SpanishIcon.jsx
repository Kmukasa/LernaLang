import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function SpanishIcon({ height, width }) {
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
        width={73}
        height={73}
      >
        <Circle
          cx={36.0001}
          cy={36.0001}
          r={36}
          transform="rotate(180 36 36)"
          fill="#D9D9D9"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#A00009" d="M0 0H72V72H0z" />
        <Path
          transform="rotate(90 72 18)"
          fill="#F1B434"
          d="M72.0001 18.0001H108.0001V90.0001H72.0001z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6 19.667h2V21h2v2h-2v1.869a4 4 0 014.667 6.446V33H17.933v-1.685a4 4 0 014.667-6.446V23h-2v-2h2v-1.333zm1 6.02l-.018-.02h.037l-.019.02zM23.582 31l.018-.02.019.02h-.037z"
          fill="#E26E00"
        />
        <Path
          d="M14.6 33h18v9.822c0 3.953-2.4 7.511-6.065 8.992a7.834 7.834 0 01-5.87 0 9.699 9.699 0 01-6.065-8.992V33z"
          fill="#F5F7F8"
        />
        <Mask
          id="b"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={14}
          y={33}
          width={19}
          height={20}
        >
          <Path
            d="M14.6 33h18v9.822c0 3.953-2.4 7.511-6.065 8.992a7.834 7.834 0 01-5.87 0 9.699 9.699 0 01-6.065-8.992V33z"
            fill="#F5F7F8"
          />
        </Mask>
        <G mask="url(#b)">
          <Path fill="#DD2033" d="M14.6002 33.0001H23.6002V43.0001H14.6002z" />
          <Path fill="#E26E00" d="M14.6002 43.0001H23.6002V53.0001H14.6002z" />
          <Path fill="#DD2033" d="M23.6002 43.0001H32.6002V53.0001H23.6002z" />
        </G>
        <Path d="M34.6 33h3v19h-3V33zM9.6 33h3v19h-3V33z" fill="#F5F7F8" />
      </G>
    </Svg>
  );
}

export default SpanishIcon;
