import * as React from "react";
import { Svg, Path, Circle } from "react-native-svg";

import { SvgProps } from "../NavigationIcons";

const HomeIcon = ({ size, background, colour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 500 500">
    <Circle
      cx={267.703}
      cy={248.337}
      r={207.453}
      fill={colour}
      stroke={colour}
      strokeWidth={27.66}
      transform="translate(-40.346 -19.342) scale(1.08458)"
    />
    <Circle
      cx={267.703}
      cy={248.337}
      r={207.453}
      fill={background}
      stroke={background}
      strokeWidth={31.42}
      transform="matrix(.95823 0 0 .95068 -6.52 13.91)"
    />
    <Path
      d="M166.275 58.49v372.005"
      fill="none"
      stroke={colour}
      strokeWidth={45.38}
      transform="matrix(.86584 0 0 .8968 71.804 30.739)"
    />
    <Path
      d="M7.553 22.765S18.57 6.595 24.079 6.595c5.508 0 16.526 16.17 16.526 16.17"
      fill="none"
      stroke={colour}
      strokeWidth={3.44}
      transform="matrix(0 -8.28931 14.17917 0 41.847 449.595)"
    />
  </Svg>
);
export default HomeIcon;
