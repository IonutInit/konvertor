import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigation = createBottomTabNavigator();

import Home from "../screens/Home.screen";
import Favourites from "../screens/Favourites.screen";
import Settings from "../screens/Settings.screen";

import sampleIcon from "../assets/sample_icon.png";

import theme from "../theme";

const NavigationTabs = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.mainColour,
        tabBarActiveBackgroundColor: theme.gray2,
      }}>
      <Navigation.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={sampleIcon}
              style={{ tintColor: theme.mainColour, width: 30, height: 30 }}
            />
          ),
        }}
      />

      <Navigation.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={sampleIcon}
              style={{ tintColor: theme.mainColour, width: 30, height: 30 }}
            />
          ),
        }}
      />

      <Navigation.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={sampleIcon}
              style={{ tintColor: theme.mainColour, width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Navigation.Navigator>
  );
};

export default NavigationTabs;
