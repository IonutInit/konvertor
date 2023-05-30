import { View, Pressable, StyleSheet } from "react-native";
import useAppContext from "../context/useAppContext";

import RemoveIcon from "./svgs/RemoveIcon";
import getTheme from "../context/theme";

type RemoveUnitProps = {
  type: "to" | "from";
  i: number;
};

const RemoveUnit = ({ type, i }: RemoveUnitProps) => {
  const { state, dispatch } = useAppContext();
  const theme = getTheme();

  const arrayLength = state[`${type}Unit`].length > 1;

  return (
    <View style={styles.removeContainer}>
      <Pressable
        onPress={() =>
          dispatch({ type: `remove_${type.toUpperCase()}_value`, payload: i })
        }
        disabled={!arrayLength}>
        {arrayLength && (
          <RemoveIcon
            size={30}
            background={theme.gray2}
            symbolColour={theme.mainColour}
          />
          // <RemoveIcon size={30} background={theme.gray2} symbolColour={theme.gray1}/>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  removeContainer: {
    width: 40,
    heigth: 40,
    alignItems: "center",
    marginRight: 10,
  },
});

export default RemoveUnit;
