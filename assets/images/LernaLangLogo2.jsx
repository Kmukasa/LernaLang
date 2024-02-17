import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

function LernaLangLogo2({ height, width }) {
  return (
    <Svg
      width={height}
      height={width}
      viewBox="0 0 167 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M83.61 83.61v63.609M147.219 147.219h-63.61M20 20v63.61M83.61 83.61H20"
        stroke="#0601B4"
        strokeWidth={38.1657}
        strokeLinecap="round"
      />
      <Ellipse
        cx={66.8166}
        cy={35.9024}
        rx={16.7929}
        ry={15.9024}
        fill="#0601B4"
        fillOpacity={0.5}
      />
      <Ellipse
        cx={132.207}
        cy={99.5118}
        rx={16.7929}
        ry={15.9024}
        fill="#0601B4"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default LernaLangLogo2;
