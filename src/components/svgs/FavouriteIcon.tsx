import * as React from 'react';
import { Svg, Path } from "react-native-svg";

import getTheme from "../../context/theme";

type Props = {
  isFavourite?: boolean;
  mainColour?: string;
  strokeColour?: string;
  size?: number;
};

const FavouritesIcon = ({
  isFavourite = false,
  mainColour = getTheme().mainColour,
  strokeColour = getTheme().gray3,
  size = 32,
}: Props) => {
  return (
    <Svg
      style={{
        width: size,
        height: size,
      }}
      viewBox="0 0 50 50">
      <Path
        d="M30.994 16.974c4.21-6 12.631-6 16.842-3 4.211 3 4.211 9 0 15-2.948 4.5-10.526 9-16.842 12-6.316-3-13.895-7.5-16.842-12-4.211-6-4.211-12 0-15 4.21-3 12.631-3 16.842 3Z"
        fill={isFavourite ? mainColour : "none"}
        stroke={isFavourite ? mainColour : strokeColour}
        strokeWidth={3.53}
        transform="matrix(1 0 0 1.253 -5.994 -8.19)"
      />
    </Svg>
  );
};
export default FavouritesIcon;
