import useAppContext from "./useAppContext";

import themeNames from "./themeNames";

import workColour from "../lib/workColour";

const mainColour: Record<number, string> = {
  0: "#000831",
  1: "#b85e00",
  2: "#d1b0b3",
  3: "#0D2B52",
  4: "#ffa6d9",
  5: "#c9303e",
  6: "#0057ba",
  7: "#2d0060",
  8: "#2d0060",
  9: "#0d2b52",
};

const secondaryColour: Record<number, string> = {
  0: "#ff616b",
  1: "#7e3075",
  2: "#2d0060",
  3: "#FF8C01",
  4: "#9c52f2",
  5: "#bfabcc",
  6: "#b319ab",
  7: "#ebd999",
  8: "#ff8c00",
  9: "#000000",
};

//left at combination 60

const getTheme = () => {
  const {
    state: { settings },
  } = useAppContext();
  const { theme } = settings;

  return {
    mainColour: mainColour[theme],
    gray1: "#F2F2F2",
    gray1Darker: "#E6E6E6",
    gray2: workColour(mainColour[theme], 0.25),
    gray3: workColour(mainColour[theme], 0.5),
    // gray2: "#C2C2C2",
    // gray3: "#929292",
    secondaryColour: secondaryColour[theme],
    name: themeNames[theme],
    allThemes: themeNames,
  };
};

export default getTheme;
