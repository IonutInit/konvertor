import appState from "./data/appState";

const settings = appState.settings.theme;

import useAppContext from "./context/useAppContext";

const mainColour: Record<number | string, string> = {
  1: "#0D2B52",
  2: "#19cc33",
  3: "#ffbf6e",
  4: "",
};

const secondaryColour: Record<number | string, string> = {
  1: "#FF8C01",
  2: "#d50c42",
  3: "#c9303e",
  4: "",
};

// const theme = {
//   mainColour: mainColour[settings],
//   gray1: "#F2F2F2",
//   gray1Darker: "#E6E6E6",
//   gray2: "#C2C2C2",
//   gray3: "#929292",
//   secondaryColour: secondaryColour[settings],
// };

// export default theme;

const getTheme = () => {
  const {
    state: { settings },
  } = useAppContext();
  const { theme } = settings;

  return {
    mainColour: mainColour[theme],
    gray1: "#F2F2F2",
    gray1Darker: "#E6E6E6",
    gray2: "#C2C2C2",
    gray3: "#929292",
    secondaryColour: secondaryColour[theme],
  };
};

export default getTheme;
