import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RelationshipsIcon({ height, width, color }) {
  return (
    <Svg
      height={height || 34}
      width={width || 34}
      fill={color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <Path
        d="M480.925 279.697c-11.272-12.285-32.272-9.672-46.316.716-12.834 10.695-100.573 68.357-100.573 68.357H227.397l-.336.168c-5.617-.186-10.006-4.902-9.84-10.509.205-5.618 4.93-10.017 10.51-9.822l-.335-.195h78.569c15.773 0 28.571-12.779 28.571-28.542 0-15.792-12.798-28.58-28.571-28.58H191.719c-71.427 0-94.045 29.771-119.044 54.751l-45.348 39.62a13.446 13.446 0 00-4.65 10.184V507.51c0 1.739 1.042 3.348 2.641 4.083a4.5 4.5 0 004.818-.688l87.646-75.147a13.623 13.623 0 0111.198-3.023l136.604 24.832c9.523 1.73 19.326-.455 27.268-6.044 0 0 174.326-121.23 187.216-131.954 12.259-11.254 12.129-27.586.857-39.872zM216.627 218.333c21.521 14.742 48.604 25.548 48.604 25.548 2.492.81 6.343 1.516 7.682 1.516 1.321 0 5.171-.706 7.664-1.516 0 0 27.064-10.806 48.603-25.548 32.774-22.34 85.935-66.191 85.935-128.01 0-62.703-35.472-91.116-74.495-90.306-29.761.539-47.339 18.126-59.132 35.462-2.158 3.218-5.376 5.273-8.575 5.357-3.218-.084-6.436-2.139-8.575-5.357C252.545 18.143 234.949.556 205.188.017c-39.043-.81-74.477 27.603-74.477 90.306 0 61.819 53.141 105.671 85.916 128.01zM187.368 39.282c2.994-3.673 6.733-6.788 11.011-9.384 4.223-2.548 9.71-1.2 12.258 3.023 2.568 4.222 1.209 9.719-3.014 12.258-2.808 1.711-4.873 3.497-6.399 5.384-3.106 3.832-8.742 4.399-12.574 1.284-3.812-3.115-4.388-8.732-1.282-12.565zm-20.926 56.91c0-5.97.614-11.513 1.934-16.61 1.246-4.781 6.139-7.636 10.901-6.38 4.78 1.237 7.625 6.12 6.398 10.89-.874 3.311-1.376 7.347-1.376 12.1 0 4.706.484 10.119 1.506 16.183 1.637 9.71 5.767 18.731 11.811 27.203 2.865 4.008 1.935 9.588-2.083 12.453-4.036 2.864-9.598 1.934-12.462-2.083-7.31-10.203-12.723-21.791-14.881-34.597-1.153-6.863-1.748-13.225-1.748-19.159z"
        fill={color || "#000"}
      />
    </Svg>
  );
}

export default RelationshipsIcon;