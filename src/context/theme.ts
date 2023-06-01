import useAppContext from "./useAppContext";

const mainColour: Record<number, string> = {
  1: "#0D2B52",
  2: "#19cc33",
  3: "#ffbf6e",
  4: "",
};

const secondaryColour: Record<number, string> = {
  1: "#FF8C01",
  2: "#d50c42",
  3: "#c9303e",
  4: "",
};

const name: Record<number, string> = {
  1: "Blue",
  2: "Second theme",
  3: "Third theme",
  4: "Fourth theme",
};

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
    name: name[theme],
    allThemes: name,
  };
};

export default getTheme;
