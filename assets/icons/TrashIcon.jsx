import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TrashIcon({ height, width, color }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.875 8.176v5.295m3.25-5.295v5.295m3.25-8.824v10.588c0 .975-.727 1.765-1.625 1.765h-6.5c-.897 0-1.625-.79-1.625-1.765V4.647M1 4.647h13m-4.063 0v-.882C9.938 2.79 9.21 2 8.313 2H6.687c-.897 0-1.625.79-1.625 1.765v.882"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TrashIcon;
