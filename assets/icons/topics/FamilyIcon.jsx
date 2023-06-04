import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function FamilyIcon({ height, width, color }) {
  return (
    <Svg
      height={height || 34}
      width={width || 34}
      fill={color || "#000"}
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <Path
        className="st0"
        d="M78.641 118.933c22.88 0 41.416-18.551 41.416-41.414 0-22.887-18.536-41.423-41.416-41.423-22.887 0-41.422 18.536-41.422 41.423-.001 22.863 18.535 41.414 41.422 41.414zM255.706 228.73v.062c.101 0 .194-.031.294-.031.101 0 .194.031.294.031v-.062c15.562-.317 28.082-12.976 28.082-28.601 0-15.648-12.52-28.299-28.082-28.616v-.063c-.101 0-.194.031-.294.031-.1 0-.193-.031-.294-.031v.063c-15.563.317-28.082 12.968-28.082 28.616-.001 15.625 12.519 28.284 28.082 28.601zM433.359 118.933c22.887 0 41.423-18.551 41.423-41.414 0-22.887-18.536-41.423-41.423-41.423-22.88 0-41.416 18.536-41.416 41.423.001 22.863 18.537 41.414 41.416 41.414z"
      />
      <Path
        className="st0"
        d="M470.097 138.553H415.381a56.189 56.189 0 00-50.033 30.622l-33.494 97.967a8.117 8.117 0 01-5.792 4.282 8.093 8.093 0 01-6.914-2.036l-20.836-18.04a33.71 33.71 0 00-22.902-8.973h-38.82a33.71 33.71 0 00-22.902 8.973l-20.835 18.04a8.093 8.093 0 01-6.914 2.036 8.12 8.12 0 01-5.791-4.282l-33.495-97.967a56.186 56.186 0 00-50.032-30.622H41.902C21.834 138.553 0 160.387 0 180.464v139.211c0 10.034 8.13 18.171 18.164 18.171h12.682l6.906 118.725c0 10.676 8.664 19.332 19.34 19.332h42.244c10.676 0 19.34-8.656 19.34-19.332l6.906-118.725-.085-84.766c0-1.339.914-2.493 2.222-2.818a2.903 2.903 0 013.26 1.502l26.572 65.401a22.486 22.486 0 0035.26 6.272l25.426-18.729a2.954 2.954 0 013.136-.542 2.924 2.924 0 011.743 2.663l.093 73.508 4.777 82.187c0 7.387 6.001 13.379 13.395 13.379h29.236c7.394 0 13.394-5.992 13.394-13.379l4.778-82.187.093-73.508c0-1.146.681-2.19 1.742-2.663a2.954 2.954 0 013.136.542l25.427 18.729a22.482 22.482 0 0035.259-6.272l26.573-65.401a2.903 2.903 0 013.259-1.502 2.902 2.902 0 012.222 2.818l-.085 84.766 6.906 118.725c0 10.676 8.664 19.332 19.341 19.332H454.905c10.677 0 19.342-8.656 19.342-19.332l6.906-118.725h12.682c10.034 0 18.164-8.137 18.164-18.171V180.464c.001-20.077-21.833-41.911-41.902-41.911z"
      />
    </Svg>
  );
}

export default FamilyIcon;