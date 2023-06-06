import { View, ScrollView, Text, StyleSheet, Pressable, Linking } from "react-native";
import {useState} from "react"

import AddButton from "./svgs/AddButton";
import ArithmeticOperatorButton from "./svgs/ArithmeticOperatorButton";
import CalculatorIcon from "./svgs/CalculatorIcon";
import FavouritesIcon from "./svgs/FavouriteIcon";
import KeyboardIcon from "./svgs/KeyboardIcon";
import Divider from "./Divider";


const Credentials = () => {
  const [arithmeticOperatorButton, setArithmeticOperatorButton] = useState(true)
  const [favouritesButton, setFavouritesButton] = useState(false)

  
  return (
    <View style={styles.credentialsContainer}>
      <View style={styles.titleContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.credentialsTitle}>Konvertor</Text>
        </View>
        <View style={{ paddingBottom: 5 }}>
          <Text>&#169; 2023 Ionut Cojocaru</Text>
        </View>
        <Text style={styles.credentialsSubtitle}>
          A simple but smart unit conversion app
        </Text>
      </View>

      <Text style={styles.credentialsText}>
        Use this app to convert not just one, but multiple values at once. For
        example, you can now convert feet and inches directly into meters, or
        meters and milimeteres. Just use the Add button to add your desired
        measurement units that need converted or from or to.
      </Text>

      <Text style={styles.credentialsText}>
        Not only that, but you can you use it as a small calculator. Toggle
        between the + and - sign at the top of the screen, to add or subtract
        the FROM values.
      </Text>


    <View style={styles.featureOuterContainer}>
      <View style={styles.featureInnerContainer}>        
           <AddButton size={28}/>       
        <Text style={styles.featureTitle}>Convert multiple units at once</Text>
      </View>

      <Text style={styles.featureText}>
      Use this app to convert not just one, but multiple values at once. For
        example, you can now convert feet and inches directly into meters, or
        meters and milimeteres. Just use the Add button to add your desired
        measurement units that need converted or from or to.
        </Text> 
    </View>


    <View style={styles.featureOuterContainer}>
      <View style={styles.featureInnerContainer}>
      <Pressable  onPress={() =>setArithmeticOperatorButton(!arithmeticOperatorButton)}>
         <ArithmeticOperatorButton isAddition ={arithmeticOperatorButton} size={30}/>
      </Pressable>       
        <Text style={styles.featureTitle}>Add or subtract while converting</Text>
      </View>
      <Text style={styles.featureText}>
      Use this app to convert not just one, but multiple values at once. For
        example, you can now convert feet and inches directly into meters, or
        meters and milimeteres. Just use the Add button to add your desired
        measurement units that need converted or from or to.
        </Text> 
    </View>


    <View style={styles.featureOuterContainer}>
      <View style={styles.featureInnerContainer}>
        <CalculatorIcon size={30}/>
        <Text style={styles.featureTitle}>Make direct calculations</Text>
      </View>
      <Text style={styles.featureText}>
No longer do you need to take more steps in calcutaing between different units. 
        </Text> 
    </View>



    <View style={styles.featureOuterContainer}>
      <View style={styles.featureInnerContainer}>
        <Pressable onPress={() => setFavouritesButton(!favouritesButton)}>
          <FavouritesIcon isFavourite={favouritesButton}/>
        </Pressable>
        
        <Text style={styles.featureTitle}>Your go-to combinations at the touch of a finger</Text>
      </View>
      <Text style={styles.featureText}>
No more inputting the same data over and over again. Favourite any combination and access it from the Favourites tab, or even from the Home screen.
        </Text> 
    </View>


    <View style={styles.featureOuterContainer}>
      <View style={styles.featureInnerContainer}>
        <KeyboardIcon />
        <Text style={styles.featureTitle}>Just type your conversion</Text>
      </View>

      <Text style={styles.featureText}>
No more inputting at all... almost. Just type in your desired conversion and get the results.
        </Text> 
    </View>



    <View style={styles.featureOuterContainer}>
      <View style={styles.featureInnerContainer}>
        {/* <KeyboardIcon /> */}
        <Text style={styles.featureTitle}>Email me</Text>
      </View>

      <Text style={styles.featureText}>
No more inputting at all... almost. Just type in your desired conversion and get the results.
        </Text> 
    </View>



    <View style={[styles.littleCredentials, {flexDirection: "row"}]}>
    <Text style={styles.smallFont}>Colours by </Text>
      <Text style={[styles.smallFont, {fontWeight: "bold"}]} onPress={() => {Linking.openURL('https://en.wikipedia.org/wiki/Sanzo_Wada')}} >Sanzo Wada</Text>
    </View>
  


<View style={[styles.littleCredentials, {flexDirection: "row"}]}>
  <Text style={styles.smallFont}>Icons from </Text>
  <Text style={[styles.smallFont, {fontWeight: "bold"}]} onPress={() => {Linking.openURL('https://thenounproject.com/')}}>The Noun Project</Text>
</View>

<View style={[styles.littleCredentials, {flexDirection: "row"}, {paddingTop: 0}]}>
  <Text style={styles.smallFont}>Abderraouf Omara, Abdul Karim, Adrien Coquet, Andrejs Kirma, Arthur Shlain, Beau Wingfield, Creative Stall, Ekaterina Martirosian, Fahmi Somdi Std, Flatart, Iconfield, I Cons, Jackvisual Assets, Julita Rodríguez, Kawalan Icon, M Zainur Rifqi, Mada Creative, Manglayang Studio, Megan Chown, Meko, Mohamed Mb, Ph_Ve, Sara Novovitch, Smashicons, 33studio, Timur Minvaleev, Universal Icons</Text>
</View>



<View style={styles.bottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  credentialsContainer: {
    paddingTop: 30,
  },
  titleContainer: {
    alignItems: "center",
  },
  credentialsTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  credentialsSubtitle: {
    fontSize: 18,
    fontStyle: "italic",
    paddingBottom: 10,
  },
  credentialsText: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  featureOuterContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  featureInnerContainer: {
    width: "80%",
    // flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
  },
  featureTitle: {
    // fontSize: 16,
    fontWeight: "bold"
  },
  featureText: {

  },
  littleCredentials: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  smallFont: {
    fontSize: 10,
  },
  bottom: {
    paddingVertical: 30,
  },

});

export default Credentials
