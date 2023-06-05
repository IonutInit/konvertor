import useAppContext from "./useAppContext";

const mainColour: Record<number, string> = {
  0: "#0057ba",
  1: "#000831",
  2: "#6e66d4",
  3: "#b85e00",
  4: "#d1b0b3",
  5: "#0D2B52",
  6: "#0024cc",
  7: "#ffa6d9",
  8: "#c9303e",
  9: "#0057ba",
  10: "#2d0060",
  11: "#2d0060",
  12: "#1b3644",
  13: "#0d2b52",
};

const secondaryColour: Record<number, string> = {
  0: "#d60036",
  1: "#ff616b",
  2: "#3d0079",
  3: "#7e3075",
  4: "#2d0060",
  5: "#FF8C01",
  6: "#1b8e13",
  7: "#9c52f2",
  8: "#bfabcc",
  9: "#b319ab",
  10: "#ebd999",
  11: "#ff8c00",
  12: "#6b2e63",
  13: "#0d2b52",
};

const name: Record<number, string> = {
  0: "Almost All the Reds",
  1: "A Tablespoon of Black",
  2: "Mauve Squared",
  3: "A Yard of Sienna",
  4: "An Inch Madder",
  5: "Slightly Orange",
  6: "A Lot of Green",
  7: "A Cubic Meter of Flowers",
  8: "Weeks to Seconds",
  9: "Degrees of Rosolanc",
  10: "The Yellows",
  11: "A Bite of Orange",
  12: "no name yet",
  13: "Kind of Darkish",
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
    gray2: "#C2C2C2",
    gray3: "#929292",
    secondaryColour: secondaryColour[theme],
    name: name[theme],
    allThemes: name,
  };
};

export default getTheme;
