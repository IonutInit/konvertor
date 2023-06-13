import * as React from "react";
import {
  View,
  Pressable,
  Text,
  LayoutAnimation,
} from "react-native";

import useAppContext from "../context/useAppContext";

import FavouritesIcon from "./svgs/FavouriteIcon";

import getTheme from "../context/theme";

const FavOptionOnHome = ({ commonStyles }) => {
  const {
    state: { settings },
    dispatch,
  } = useAppContext();

  const theme = getTheme();

  return (
    <Pressable
      style={[
        commonStyles.pressableMeasure,
        {
          backgroundColor: !settings.favouritesOnHome
            ? theme.mainColour
            : theme.gray1,
        },
      ]}
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        dispatch({
          type: "toggle_favourites_on_home",
        });
      }}>
      <View style={commonStyles.innerPressableContainer}>
        <FavouritesIcon
          isFavourite
          secondaryColour={
            !settings.favouritesOnHome ? theme.gray1 : theme.mainColour
          }
        />
        <View style={commonStyles.te}>
          <Text
            style={[
              {
                color: !settings.favouritesOnHome
                  ? theme.gray1
                  : theme.mainColour,
              },
              { textAlign: "center" },
              {marginBottom: 8}
            ]}>
            {`${!settings.favouritesOnHome ? "Show" : "Hide"} Favourites`}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FavOptionOnHome;
