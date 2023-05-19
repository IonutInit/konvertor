import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigation = createBottomTabNavigator();

import Home from "../screens/Home.screen";
import Favourites from "../screens/Favourites.screen";
import Settings from "../screens/Settings.screen";

const NavigationTabs = () => {
  return (
    <Navigation.Navigator>
      <Navigation.Screen name="Settings" component={Settings} />
      <Navigation.Screen name="Home" component={Home} />
      <Navigation.Screen name="Favourites" component={Favourites} />
    </Navigation.Navigator>
  );
};

export default NavigationTabs;
