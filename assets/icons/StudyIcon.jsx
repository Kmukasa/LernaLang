import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function StudyIcon({ width, height, color }) {
  return (
    <Svg
      width={width || 51}
      height={height || 36}
      viewBox="0 0 51 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.5 5.5A3.5 3.5 0 0111 2h34.676a3.5 3.5 0 013.5 3.5v19a3.5 3.5 0 01-3.5 3.5H11a3.5 3.5 0 01-3.5-3.5v-19z"
        stroke={color || "#000"}
        // strokeOpacity={0.56}
        strokeWidth={3}
      />
      <Rect y={7} width={44.6761} height={29} rx={5} fill="#fff" />
      <Rect
        x={1.5}
        y={8.5}
        width={41.6761}
        height={26}
        rx={3.5}
        stroke="#000"
        // strokeOpacity={0.56}
        strokeWidth={3}
      />
    </Svg>
  );
}

export default StudyIcon;
