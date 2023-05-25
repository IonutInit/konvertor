import { View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigation = createBottomTabNavigator();

import Home from "../screens/Home.screen";
import Favourites from "../screens/Favourites.screen";
import Settings from "../screens/Settings.screen";

import functionalIcons from "../iconMaps/functionalIconsMap";

import theme from "../theme";

const NavigationTabs = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: theme.mainColour,
        },
        tabBarStyle: {
backgroundColor: theme.mainColour,
        },
        headerTintColor: theme.gray1,
        //tabBarActiveBackgroundColor: theme.gray1Darker
      }}>
      <Navigation.Screen
        name="Home"
        component={Home}
        options={{
          title: "Konvertor",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={functionalIcons.homeIcon}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />

      <Navigation.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View>
                {/* <Text>
                Hello
              </Text> */}
                <Image
                  source={functionalIcons.favouritesIcon}
                  style={{ width: 30, height: 30 }}
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
          tabBarIcon: ({ color, size }) => (
            <Image
              source={functionalIcons.settingsIcon}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Navigation.Navigator>
  );
};

export default NavigationTabs;
