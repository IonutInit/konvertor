import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useAppContext from "../context/useAppContext";

const Navigation = createBottomTabNavigator();

import Home from "../screens/Home.screen";
import Favourites from "../screens/Favourites.screen";
import Settings from "../screens/Settings.screen";

import NavigationIcons from "../components/svgs/NavigationIcons";

import getTheme from "../context/theme";

const NavigationTabs = () => {
  const theme = getTheme();

  const {
    state: { activeTab },
  } = useAppContext();

  return (
    <Navigation.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: theme.mainColour,
        },
        tabBarStyle: {
          backgroundColor: theme.mainColour,
          height: 70,
        },
        headerTintColor: theme.gray1,
      }}>
      <Navigation.Screen
        name="Home"
        component={Home}
        options={{
          title: "Konvertor",
          tabBarIcon: () => (
            <NavigationIcons type="home" isActive={activeTab === "Home"} />
          ),
        }}
      />

      <Navigation.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <NavigationIcons
                  type="favourites"
                  isActive={activeTab === "Favourites"}
                />
              </View>
            );
          },
        }}
      />

      <Navigation.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <NavigationIcons
              type="settings"
              isActive={activeTab === "Settings"}
            />
          ),
        }}
      />
    </Navigation.Navigator>
  );
};

export default NavigationTabs;
