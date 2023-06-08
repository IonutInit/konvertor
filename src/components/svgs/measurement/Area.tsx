import * as React from "react";

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Area = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M554.4 61.602H145.6h.004c-7.734 0-14 6.266-14 14v408.8-.004c0 3.715 1.473 7.277 4.098 9.902a14.001 14.001 0 0 0 9.902 4.098h408.8-.004c3.715 0 7.277-1.473 9.902-4.098a14.001 14.001 0 0 0 4.098-9.902v-408.8.004c0-3.715-1.473-7.277-4.098-9.902a14.001 14.001 0 0 0-9.902-4.098Zm-190.4 364H218.4c-7.73 0-14-6.269-14-14v-145.6c0-7.731 6.27-14 14-14 7.734 0 14 6.269 14 14v131.6H364c7.731 0 14 6.266 14 14 0 7.731-6.269 14-14 14Zm131.6-131.6c0 7.73-6.269 14-14 14-7.734 0-14-6.27-14-14v-131.6H336c-7.73 0-14-6.266-14-14 0-7.731 6.27-14 14-14h145.6a14.003 14.003 0 0 1 14 14v145.6Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.10302 0 0 .10302 -11.058 -3.846)"
    />
  </Svg>
);
export default Area;
