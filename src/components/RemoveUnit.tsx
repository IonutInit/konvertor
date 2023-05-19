import { Text, Pressable } from "react-native";
import useAppContext from "../context/useAppContext";

type RemoveUnitProps = {
  type: "to" | "from";
  i: number;
};

const RemoveUnit = ({ type, i }: RemoveUnitProps) => {
  const { state, dispatch } = useAppContext();

  return (
    <Pressable
      onPress={() =>
        dispatch({ type: `remove_${type.toUpperCase()}_value`, payload: i })
      }>
      <Text>X</Text>
    </Pressable>
  );
};

export default RemoveUnit;
