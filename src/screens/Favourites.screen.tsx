import { View, Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

const Favourites = () => {
  const {state: {favourites}, dispatch} = useAppContext() 

  console.log(favourites)

  return (
    <View>
      {favourites.map((fav) => (
        <Pressable>
          <Text>{fav.from[0]} TO { fav.to[0] } </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Favourites;
