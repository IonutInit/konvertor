import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigation = createBottomTabNavigator()

import Home from "./Home.screen";
import Favourites from "./Favourites.screen";
import Settings from "./Settings.screen";

const NavigationTabs = () => {
    return(
        <Navigation.Navigator>
            <Navigation.Screen name="Home" component={Home}/>
            <Navigation.Screen name="Favourites" component={Favourites}/>
            <Navigation.Screen name="Settings" component={Settings}/>              
        </Navigation.Navigator>    
    )
}

export default NavigationTabs;