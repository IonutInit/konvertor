import { useLayoutEffect, Dispatch } from "react";

import { ActionType } from "../../types";

const useGetInFocus = (
  navigation: any,
  dispatch: Dispatch<ActionType>,
  tab: "Home" | "Favourites" | "Settings"
) => {
  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch({
        type: "change_tab",
        payload: tab,
      });
    });
    return unsubscribe;
  }, [dispatch, navigation]);
};

export default useGetInFocus;
