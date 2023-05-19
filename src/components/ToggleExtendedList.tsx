import {View, Pressable, Text, StyleSheet} from "react-native";

import useAppContext from "../context/useAppContext";

const ToggleExtendedList = () => {
    const {state: {settings}, dispatch} = useAppContext()

    const handleToggleExtendedList = () => {
        dispatch({
            type: "toggle_extendedList"
        })
    }

    return(
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={handleToggleExtendedList}>
            <Text style={styles.text}>
Show {settings.extendedList ? "more" : "less"}
            </Text>
        </Pressable> 
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    pressable: {
        width: 90,
        height: 30,
        backgroundColor: "#0D2B52",
        borderRadius: 10,
        justifyContent: "center", 
        alignItems: "center",
    },
    text: {
        color: "#F3F3F3"
    },
})

export default ToggleExtendedList;