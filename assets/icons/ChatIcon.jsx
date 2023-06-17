import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ChatIcon({ width, height, color }) {
  return (
    <Svg
      width={width || "40px"}
      height={height || "40px"}
      viewBox="0 0 15 15"
      fill={color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 3h-10A1.5 1.5 0 001 4.5v5A1.5 1.5 0 002.5 11h5a.5.5 0 01.354.146L10 13.293V11.5a.5.5 0 01.5-.5h2A1.5 1.5 0 0014 9.5v-5A1.5 1.5 0 0012.5 3zm-10-1h10A2.5 2.5 0 0115 4.5v5a2.5 2.5 0 01-2.5 2.5H11v2.5a.5.5 0 01-.854.354L7.293 12H2.5A2.5 2.5 0 010 9.5v-5A2.5 2.5 0 012.5 2z"
        fill={color || "#000"}
      />
    </Svg>
  );
}

export default ChatIcon;
