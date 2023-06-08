import * as React from "react";

import { createContext } from "react";

import { ThemeType } from "../../types";

type ProviderProps = {
  children: React.ReactNode;
  theme: ThemeType;
};

export const ThemeContext = createContext({
  theme: {
    mainColour: "",
    gray1: "#F2F2F2",
    gray1Darker: "#E6E6E6",
    gray2: "#C2C2C2",
    gray3: "#929292",
    secondaryColour: "",
  },
});

export const ThemeContextProvider = ({ children, theme }: ProviderProps) => {
  const themeContext = { theme };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
