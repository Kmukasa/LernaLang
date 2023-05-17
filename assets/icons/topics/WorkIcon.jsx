import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WorkIcon({ height, width, color }) {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M277.333 0l21.334 21.333L298.666 64h128v298.667H0V64h128V21.333L149.333 0h128zM42.666 220.935V320H384v-99.065c-42.625 12.196-85.298 19.824-128 22.874v33.524h-85.333V243.81c-42.702-3.05-85.375-10.678-128-22.874zM384 106.667H42.667v69.766c56.972 17.5 113.84 26.234 170.666 26.234 56.827 0 113.695-8.734 170.668-26.234L384 106.667zm-128-64h-85.333V64H256V42.667z"
        transform="translate(42.667 64)"
        fill={color || "#000"}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default WorkIcon;
