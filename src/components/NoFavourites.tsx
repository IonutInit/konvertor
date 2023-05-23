import {View, Text, StyleSheet} from "react-native"

import Divider from "./Divider";

const NoFavourites = () => {
    return(
        <View style={styles.noFavouritesContainer}>
        <Text style={styles.noFavouritesTitle}>No favourites yet</Text>
        <Divider />
        <Text style={styles.noFavouritesText}>Use the heart symbol at the top of any configuration you chose to save them for fast future use.</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    noFavouritesContainer: {
        alignItems: "center",
        paddingTop: 30,
      },
      noFavouritesTitle :{
        fontSize: 24,
      },
      noFavouritesText: {
        marginTop: 10,
      }, 
})

export default NoFavourites;