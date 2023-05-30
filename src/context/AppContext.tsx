import { createContext, useMemo, Dispatch } from "react";

import { AppStateType, ActionType } from "../../types";

type ProviderProps = {
  state: AppStateType;
  dispatch: Dispatch<ActionType>;
  children: React.ReactNode;
};

export const AppContext = createContext({
  state: {} as AppStateType,
  dispatch: (() => null) as Dispatch<ActionType>,
});

export const AppContextProvider = ({
  state,
  dispatch,
  children,
}: ProviderProps) => {
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
