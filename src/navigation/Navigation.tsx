import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigation = createBottomTabNavigator();

import Home from "../screens/Home.screen";
import Favourites from "../screens/Favourites.screen";
import Settings from "../screens/Settings.screen";

import NavigationIcons from "../components/svgs/NavigationIcons";

import getTheme from "../context/theme";

const NavigationTabs = () => {
  const theme = getTheme();

  return (
    <Navigation.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: theme.mainColour,
        },
        tabBarStyle: {
          backgroundColor: theme.mainColour,
          height: 60,
        },
        headerTintColor: theme.gray1,
        //tabBarActiveBackgroundColor: theme.gray1Darker
      }}>


<Navigation.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => <NavigationIcons type="settings" />,
        }}
      />
      

      <Navigation.Screen
        name="Home"
        component={Home}
        options={{
          title: "Konvertor",
          tabBarIcon: ({ color, size }) => <NavigationIcons type="home" />,
        }}
      />

      <Navigation.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ paddingBottom: 20 }}>
                <NavigationIcons type="favourites" size={55} />
              </View>
            );
          },
        }}
      />

 
    </Navigation.Navigator>
  );
};

export default NavigationTabs;
