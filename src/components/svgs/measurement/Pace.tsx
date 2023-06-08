import * as React from "react";

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Pace = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="m490.55 187.26-158.5 186.07H90L278.98 24.44A46.665 46.665 0 0 1 320.015-.001h41.312a46.666 46.666 0 0 1 41.031 24.441l88.192 162.82Zm100.79 186.07H381.09l128.52-150.88 81.73 150.88Zm42.359 78.203a46.653 46.653 0 0 1 5.633 22.227v39.57c0 25.773-20.891 46.668-46.664 46.668h-504C62.895 559.998 42 539.103 42 513.33v-39.57a46.69 46.69 0 0 1 5.633-22.227l22.137-40.867h541.79l22.139 40.867Zm-71.352-290.98-52.734 61.902-19.062-35.195 45.008-52.836c-5.238-9.402-8.227-20.23-8.227-31.758 0-36.082 29.254-65.336 65.336-65.336C628.75 37.33 658 66.584 658 102.666c0 36.082-29.25 65.332-65.332 65.332-10.945 0-21.262-2.691-30.32-7.445h-.001Zm30.32-29.887c15.461 0 28-12.539 28-28 0-15.465-12.539-28-28-28-15.465 0-28 12.535-28 28 0 15.461 12.535 28 28 28Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="translate(-2.273 3.182) scale(.07792)"
    />
  </Svg>
);
export default Pace;
