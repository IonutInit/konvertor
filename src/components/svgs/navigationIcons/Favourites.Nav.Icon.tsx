
import * as React from 'react';
import { Svg, Path, Circle } from "react-native-svg";

import { SvgProps } from "../NavigationIcons";

const FavouritesIcon = ({ size, background, colour }: SvgProps) => (
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
      strokeWidth={31.43}
      transform="matrix(.95823 0 0 .95068 -6.52 13.91)"
    />
    <Path
      d="M30.994 16.974c4.21-6 12.631-6 16.842-3 4.211 3 4.211 9 0 15-2.948 4.5-10.526 9-16.842 12-6.316-3-13.895-7.5-16.842-12-4.211-6-4.211-12 0-15 4.21-3 12.631-3 16.842 3Z"
      fill={colour}
      stroke={colour}
      strokeWidth={3.53}
      strokeLinecap="butt"
      transform="matrix(7 0 0 8.771 33.043 29.358)"
    />
  </Svg>
);
export default FavouritesIcon;
