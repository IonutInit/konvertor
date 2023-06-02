import useAppContext from "./useAppContext";

const mainColour: Record<number, string> = {
  1: "#0D2B52",
  2: "#704E2E",
  3: "#606C38",
  4: "#0D2B52",
  5: "#3D1054",
  6: "",
  7: "",
};

const secondaryColour: Record<number, string> = {
  1: "#FF8C01",
  2: "#FFDB58",
  3: "#BC6C25",
  4: "#FF8C01",
  5: "#E16588",
  6: "",
  7: "",
};

const name: Record<number, string> = {
  1: "Blue",
  2: "Autumn",
  3: "Third theme",
  4: "Autumn2",
  5: "Spring",
  6: "Summer",
  7: "one more",
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
