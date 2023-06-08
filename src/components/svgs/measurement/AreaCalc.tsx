import * as React from "react";

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const AreaCalc = ({ size, mainColour, secondaryColour }: SvgProps) => (
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
      transform="matrix(.0692 0 0 .0692 8.164 13.008)"
    />
    <Path
      d="M169.17 93.332c0-35.438 28.727-64.164 64.164-64.164h233.34c35.438 0 64.164 28.727 64.164 64.164v373.34c0 35.438-28.727 64.164-64.164 64.164h-233.34c-35.438 0-64.164-28.727-64.164-64.164v-140c0-9.664 7.832-17.5 17.5-17.5 9.664 0 17.5 7.836 17.5 17.5v140c0 16.109 13.059 29.164 29.164 29.164h233.34c16.109 0 29.164-13.055 29.164-29.164V93.332c0-16.105-13.055-29.164-29.164-29.164h-233.34c-16.105 0-29.164 13.059-29.164 29.164v140c0 9.664-7.836 17.5-17.5 17.5-9.668 0-17.5-7.836-17.5-17.5v-140Z"
      fill={secondaryColour}
      transform="matrix(.03826 0 0 .03826 -4.512 1.454)"
    />
    <Path
      d="M227.5 105c0-9.664 7.836-17.5 17.5-17.5h210c9.664 0 17.5 7.836 17.5 17.5v93.332c0 9.668-7.836 17.5-17.5 17.5H245c-9.664 0-17.5-7.832-17.5-17.5V105Zm35 17.5v58.332h175V122.5h-175ZM367.5 280c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H385c-9.664 0-17.5-7.836-17.5-17.5ZM367.5 350c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H385c-9.664 0-17.5-7.836-17.5-17.5ZM367.5 420c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H385c-9.664 0-17.5-7.836-17.5-17.5ZM250.83 280c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H268.33c-9.664 0-17.5-7.836-17.5-17.5ZM250.83 350c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H268.33c-9.664 0-17.5-7.836-17.5-17.5ZM250.83 420c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H268.33c-9.664 0-17.5-7.836-17.5-17.5Z"
      fill={secondaryColour}
      transform="matrix(.03826 0 0 .03826 -4.512 1.454)"
    />
  </Svg>
);
export default AreaCalc;
