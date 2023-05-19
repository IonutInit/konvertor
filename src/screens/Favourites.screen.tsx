import { View, Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

const Favourites = () => {
  const {state: {favourites}, dispatch} = useAppContext() 

  const handleLaunchFavourite = (fromUnit: string[], toUnit: string[]) => {
    dispatch({
      type: "launch_favourite",
      payload: {
        fromUnit,
        toUnit,
      }
    })
  }

  return (
    <View>
      {favourites.map((fav, index) => (
        <Pressable key={index} onPress={() => handleLaunchFavourite(fav.from, fav.to)}>
          <Text>{fav.from[0]} TO { fav.to[0] } </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Favourites;
