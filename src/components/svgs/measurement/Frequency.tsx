import * as React from 'react';

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Frequency = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M103.6 115.25v285.94h492.8V115.25H103.6Zm429.24 173.99H431.48l-13.16-30.742-30.91 105.17-61.434-172.03-49.113 135.02-25.199-81.93-25.312 50.625h-58.52v-12.152h51.016l35.504-71.062 23.465 76.273 48.215-132.66 60.199 168.62 29.902-101.7 23.352 54.434h93.352v12.152l.003-.018Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.0974 0 0 .0974 -9.09 -.151)"
    />
  </Svg>
);
export default Frequency;
