import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";

function EnglishIcon({ height, width }) {
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
        <Path fill="#004692" d="M0 0H72V72H0z" />
        <Path
          d="M42.788 33.004l-2.121 2.122 25.456 25.456 2.121-2.122-25.456-25.456zM37.132 38.661l-3.536 3.536 25.456 25.456 3.535-3.536-25.456-25.456z"
          fill="#F5F7F8"
        />
        <Path
          d="M37.132 38.661l3.535-3.535 25.456 25.456-3.536 3.535-25.456-25.456z"
          fill="#DD2033"
        />
        <Path
          d="M38.244 42.193l-2.12-2.122-25.457 25.456 2.122 2.121 25.455-25.455zM32.587 36.536L29.052 33 3.596 58.456l3.536 3.535 25.456-25.455z"
          fill="#F5F7F8"
        />
        <Path
          d="M32.587 36.536l3.536 3.535-25.456 25.456-3.535-3.536 25.456-25.455z"
          fill="#DD2033"
        />
        <Path
          d="M30.056 40.648l2.121-2.12L6.721 13.07l-2.12 2.122 25.455 25.456zM35.713 34.992l3.535-3.536L13.793 6l-3.536 3.536 25.456 25.456z"
          fill="#F5F7F8"
        />
        <Path
          d="M35.713 34.992l-3.536 3.535L6.721 13.071l3.536-3.535 25.456 25.456z"
          fill="#DD2033"
        />
        <Path
          d="M32.6 31.46l2.122 2.121L60.178 8.125l-2.122-2.12L32.6 31.46zM38.257 37.117l3.536 3.535 25.456-25.456-3.536-3.535-25.456 25.456z"
          fill="#F5F7F8"
        />
        <Path
          d="M38.257 37.117l-3.535-3.536L60.178 8.125l3.535 3.536-25.456 25.456z"
          fill="#DD2033"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 72h-5V47H0v-5h25V30H0v-5h25V0h5v25h12V0h5v25h25v5H47v12h25v5H47v25h-5V47H30v25zm12-42H30v12h12V30z"
          fill="#F5F7F8"
        />
        <Path d="M30 72h12V42h30V30H42V0H30v30H0v12h30v30z" fill="#DD2033" />
      </G>
    </Svg>
  );
}

export default EnglishIcon;
