import { View } from "react-native";
import FavouritesIcon from "./navigationIcons/Favourites.Nav.Icon";
import HomeIcon from "./navigationIcons/Home.Nav.Icon";
import SettingsIcon from "./navigationIcons/Settings.Nav.Icon";

import platform from "../../data/platform";

import getTheme from "../../context/theme";

type Props = {
  type: "home" | "favourites" | "settings";
  size?: number;
  isActive: boolean;
};

export type SvgProps = {
  size: number;
  background: string;
  colour: string;
};

const activePadding = platform === "ios" ? 10 : 20;

const NavigationIcons = ({ type, size = 45, isActive }: Props) => {
  const theme = getTheme();

  const props = {
    size: isActive ? 55 : 50,
    background: theme.mainColour,
    colour: isActive ? theme.secondaryColour : theme.gray1,
  };

  return (
    <View
      style={
        isActive ? { paddingBottom: activePadding } : { paddingBottom: 0 }
      }>
      {type === "home" && <HomeIcon {...props} />}
      {type === "favourites" && <FavouritesIcon {...props} />}
      {type === "settings" && <SettingsIcon {...props} />}
    </View>
  );
};

export default NavigationIcons;
