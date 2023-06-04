import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function WeatherIcon({ height, width, color }) {
  return (
    <Svg
      height={height || 34}
      width={width || 34}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill={color || "#000"}
    >
      <Path
        className="st0"
        d="M54.764 225.832c18.937-11.274 41.051-17.74 64.658-17.74 2.846 0 5.71.086 8.557.268a153.957 153.957 0 0143.672-70.316c-3.888-43.932-40.739-78.335-85.643-78.335C38.499 59.71 0 98.21 0 145.709c0 36.495 22.721 67.643 54.764 80.123z"
      />
      <Path
        className="st0"
        d="M481.971 277.324c-15.622-15.639-36.408-26.175-59.502-29.1-2.005-36.148-17.341-68.84-41.364-92.829-25.759-25.785-61.481-41.771-100.814-41.762-36.85-.009-70.542 14.025-95.832 36.989a142.452 142.452 0 00-43.62 76c-6.11-1.015-12.358-1.588-18.746-1.588-31.33-.009-59.814 12.732-80.349 33.283-20.533 20.517-33.274 49.01-33.274 80.341 0 31.339 12.741 59.832 33.274 80.349 20.534 20.542 49.019 33.283 80.349 33.283h287.409c28.258 0 53.966-11.491 72.468-30.02 18.539-18.504 30.03-44.21 30.03-72.469 0-28.258-11.491-53.974-30.029-72.477zm-18.903 126.034c-13.747 13.731-32.597 22.183-53.566 22.192H122.094c-24.023-.009-45.668-9.703-61.429-25.455-15.761-15.761-25.446-37.398-25.464-61.438.018-24.032 9.703-45.677 25.464-61.438 15.761-15.744 37.406-25.447 61.429-25.456a86.602 86.602 0 0125.707 3.871l15.587 4.817 1.666-16.23c2.986-29.162 16.803-55.102 37.389-73.805 20.603-18.685 47.838-30.046 77.848-30.046 32.025 0 60.908 12.94 81.911 33.934 20.986 21.003 33.935 49.886 33.935 81.92 0 1.128-.052 2.448-.104 3.992l-.504 14.381 14.199-.548c20.872.069 39.645 8.506 53.34 22.183 13.73 13.756 22.183 32.607 22.183 53.566.001 20.962-8.452 39.813-22.183 53.56z"
      />
    </Svg>
  );
}

export default WeatherIcon;