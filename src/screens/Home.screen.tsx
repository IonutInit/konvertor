import useAppContext from "../context/useAppContext"

import {View, Text} from "react-native"

import Options from "./Options.home.screens"
import Konvertor from "./Konvertor.home.screen"

const unitTypes = ["Length", "Area", "Mass", "Volume", "Temperature", "Time", "Frequency", "Speed", "Digital", "Angle"]

const Home = () => {
    const {state: { screen }} = useAppContext();
 
    return(
        <View>
            {screen === 0 && <Options />}
            {screen === 1 && <Konvertor />}
            {/* <Text>Hello Home</Text> */}
        </View>
    )
}

export default Home;