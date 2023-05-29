import appState from "./data/appState";

const settings = appState.settings.theme

const mainColour: Record<number | string, string> = {
  1: "#0D2B52",
  2: ""
}

const secondaryColour: Record<number | string, string> = {
  1: "#FF8C01",
  2: "",
}

const theme = {
  mainColour: mainColour[settings],
  gray1: "#F2F2F2",
  gray1Darker: "#E6E6E6",
  gray2: "#C2C2C2",
  gray3: "#929292",
  secondaryColour: secondaryColour[settings],
};

export default theme;
