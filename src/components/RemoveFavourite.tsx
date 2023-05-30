import { Pressable, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import handleRemoveFavourite from "../hooks/handleRemoveFavourite";

import RemoveIcon from "./svgs/RemoveIcon";
import getTheme from "../context/theme";

type RemoveFavouriteType = {
  i: number;
};

const RemoveFavourite = ({ i }: RemoveFavouriteType) => {
  const { dispatch } = useAppContext();
  const theme = getTheme()

  return (
    <Pressable
      style={styles.closeButton}
      onPress={() => handleRemoveFavourite(dispatch, i)}>
      <RemoveIcon
        size={28}
        background={theme.secondaryColour}
        symbolColour={theme.mainColour}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 7,
    right: 7,
  },
});

export default RemoveFavourite;
