import {View, Text, StyleSheet} from "react-native"

import AddToFavourites from "./AddToFavourites"

type TitleProps = {
    title: string,
    addToFavourites?: boolean,
}

const Title = ({title, addToFavourites = true}: TitleProps) => {
    return(
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
       {addToFavourites && <AddToFavourites />}
        
   </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
      },
      title: {
        fontSize: 24,
        textAlign: "center",
      },
})

export default Title;