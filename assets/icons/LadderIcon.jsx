import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LadderIcon({ height, width, color }) {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill={color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2 2v10M12 12H2M12 12v10M22 22H12"
        stroke="#0601B4"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default LadderIcon;
