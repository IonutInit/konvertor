import * as React from "react";

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Angle = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M304.04 286.78h59.449v59.426H304.04zM304.04 202.87c77.797 2.91 140.43 65.531 143.34 143.34h164.63a270.35 270.35 0 0 0 8.199-66.203c0-149.22-120.98-270.2-270.2-270.2-15.68 0-31.023 1.41-45.965 3.977l-.004 189.086Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="translate(-6.088 .13) scale(.08882)"
    />
    <Path
      d="M369.07 357.4h-70.648a5.604 5.604 0 0 1-5.602-5.602V15.908C171.07 42.15 79.8 150.398 79.8 279.998c0 149.22 120.97 270.2 270.2 270.2 122.32 0 225.6-81.312 258.89-192.8l-239.82.002Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="translate(-6.088 .13) scale(.08882)"
    />
    <Path
      d="M436.16 346.2c-2.891-71.637-60.504-129.24-132.14-132.14v61.512h65.051c3.078 0 5.602 2.508 5.602 5.602v65.027l61.487-.001Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="translate(-6.088 .13) scale(.08882)"
    />
  </Svg>
);
export default Angle;
