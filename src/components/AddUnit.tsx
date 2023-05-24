import { Pressable, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import addUnit from "../hooks/addUnit";

import functionalIcons from "../iconMaps/functionalIconsMap";

type AddUnitProps = {
  type: "to" | "from";
};

const AddUnit = ({ type }: AddUnitProps) => {
  const { state, dispatch } = useAppContext();

  return (
    <Pressable onPress={() => addUnit(dispatch, state, type)}>
      <Image source={functionalIcons.addUnitButton} style={styles.icon} resizeMode="contain" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

export default AddUnit;
