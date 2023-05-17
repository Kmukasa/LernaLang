import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MoviesIcon({ height, width, color }) {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.729 3.875l.05.16.552 1.922a.75.75 0 01-.418.893l-.096.034L9.09 9.96h11.159a.75.75 0 01.743.649l.007.101v8.498a2.75 2.75 0 01-2.583 2.745l-.167.005H5.75a2.75 2.75 0 01-2.745-2.582L3 19.208v-8.391l-.522-1.822a2.75 2.75 0 011.726-3.35l.16-.051 12.014-3.445a2.75 2.75 0 013.35 1.726zM6.273 6.607l-1.496.429a1.25 1.25 0 00-.886 1.421l.029.125.344 1.2.295-.084 1.714-3.091zm4.756-1.364l-2.717.78-1.714 3.09 2.718-.779 1.713-3.09zm4.757-1.364l-2.717.78-1.714 3.09 2.717-.779 1.714-3.091zm1.847-.234l-1.52 2.74 2.568-.736-.343-1.201a1.247 1.247 0 00-.705-.803z"
        fill={color || "#000"}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  );
}

export default MoviesIcon;
