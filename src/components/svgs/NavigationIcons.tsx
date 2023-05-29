import FavouritesIcon from "./navigationIcons/Favourites.Nav.Icon";
import HomeIcon from "./navigationIcons/Home.Nav.Icon";
import SettingsIcon from "./navigationIcons/Settings.Nav.Icon";

// import theme from "../../theme"
import getTheme from "../../theme";

type Props = {
  type: "home" | "favourites" | "settings";
  size?: number;
};

export type SvgProps = {
  size: number;
  background: string;
  colour: string;
};

const NavigationIcons = ({ type, size = 45 }: Props) => {
  const theme = getTheme();

  const props = {
    size,
    background: theme.mainColour,
    colour: theme.gray1,
  };

  return (
    <>
      {type === "home" && <HomeIcon {...props} />}
      {type === "favourites" && <FavouritesIcon {...props} />}
      {type === "settings" && <SettingsIcon {...props} />}
    </>
  );
};

export default NavigationIcons;
