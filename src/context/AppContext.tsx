import { createContext, useMemo, Dispatch } from "react";

import { AppStateType, ActionType } from "../../types";

export const AppContext = createContext({
    state: {} as AppStateType,
    dispatch: (() => null) as Dispatch<ActionType>,
})

export const AppContextProvider = (
    {state, dispatch, children}:
    {state: AppStateType, dispatch: Dispatch<ActionType>, children: React.ReactNode}
    ) => {
    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
};
