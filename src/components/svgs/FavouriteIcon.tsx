import { Svg, Path } from "react-native-svg";

import getTheme from "../../context/theme";

type Props = {
  isFavourite: boolean;
};

const FavouritesIcon = ({ isFavourite }: Props) => {
  const theme = getTheme()

  return(
      <Svg
    style={{
      width: 32,
      height: 32,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M30.994 16.974c4.21-6 12.631-6 16.842-3 4.211 3 4.211 9 0 15-2.948 4.5-10.526 9-16.842 12-6.316-3-13.895-7.5-16.842-12-4.211-6-4.211-12 0-15 4.21-3 12.631-3 16.842 3Z"
      fill={isFavourite ? theme.mainColour : "none"}
      stroke={isFavourite ? theme.mainColour : theme.gray3}
      strokeWidth={3.53}
      transform="matrix(1 0 0 1.253 -5.994 -8.19)"
    />
  </Svg>
  )

};
export default FavouritesIcon;
