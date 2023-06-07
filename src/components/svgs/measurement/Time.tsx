import * as React from 'react';

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Time = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M350 35c135.21 0 245 109.79 245 245 0 135.21-109.79 245-245 245-135.21 0-245-109.79-245-245 0-135.21 109.79-245 245-245Zm-11.668 81.668v163.33c0 3.09 1.227 6.066 3.418 8.25l116.67 116.66c4.551 4.551 11.945 4.551 16.496 0 4.551-4.551 4.551-11.945 0-16.496l-113.25-113.25v-158.5c0-6.441-5.227-11.668-11.668-11.668-6.441 0-11.668 5.227-11.668 11.668l.002.006Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.09796 0 0 .09796 -9.286 -2.429)"
    />
  </Svg>
);
export default Time;
