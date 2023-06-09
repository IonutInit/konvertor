import * as React from "react";

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  TextInput,
  LayoutAnimation,
} from "react-native";
import { useState } from "react";

import AddButton from "./svgs/AddButton";
import ArithmeticOperatorButton from "./svgs/ArithmeticOperatorButton";
import CalculatorIcon from "./svgs/CalculatorIcon";
import FavouritesIcon from "./svgs/FavouriteIcon";
import KeyboardIcon from "./svgs/KeyboardIcon";
import Divider from "./Divider";

import NavigationIcons from "./svgs/NavigationIcons";

import getTheme from "../context/theme";

const TypingInput = ({ placeholderText }: { placeholderText: string }) => {
  const theme = getTheme();

  return (
    <TextInput
      style={[
        styles.typingContainer,
        { borderColor: theme.gray2 },
        { color: theme.gray3 },
      ]}
      placeholder={placeholderText}
      editable={false}
    />
  );
};

const Credentials = () => {
  const [arithmeticOperatorButton, setArithmeticOperatorButton] =
    useState(true);
  const [favouritesButton, setFavouritesButton] = useState(false);
  const [largePortfolioContainer, setLargePortfolioContainer] = useState(false);

  const theme = getTheme();

  return (
    <View style={styles.credentialsContainer}>
      <View style={styles.dividingContainer}>
        <Divider />
      </View>

      <View style={styles.logoContainer}>
        <NavigationIcons type="home" isActive={false} />
      </View>

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

      <View>
        <Text style={[{ paddingHorizontal: 20 }, { fontWeight: "bold" }]}>
          Clean
        </Text>
        <Text style={styles.credentialsText}>No ads, no tracking.</Text>
      </View>

      <View>
        <Text style={[{ paddingHorizontal: 20 }, { fontWeight: "bold" }]}>
          Smart
        </Text>
        <Text style={styles.credentialsText}>
          You can convert not just one, but multiple values at once. You can
          add, subtract and make relevant calculations between different units
          of measurement.
        </Text>
      </View>

      <View>
        <Text style={[{ paddingHorizontal: 20 }, { fontWeight: "bold" }]}>
          And even more...
        </Text>
      </View>

      <View style={styles.featureOuterContainer}>
        <View style={styles.featureInnerContainer}>
          <AddButton size={28} />
          <Text style={styles.featureTitle}>
            Convert multiple units at once
          </Text>
        </View>
        <Text style={styles.featureText}>
          You can convert not just one, but multiple values at once. Just use
          the Add button to add as many measurement units that need converted to
          or from.
        </Text>
        <Text style={styles.example}>
          For example, you can convert feet and inches directly into meters, or
          meters and milimeteres. There's no limit to how many measures you can
          convert from, but you can only convert to three measures at the same
          time. That should be more than enough :)
        </Text>
      </View>

      <View style={styles.dividingContainer}>
        <Divider />
      </View>

      <View style={styles.featureOuterContainer}>
        <View style={styles.featureInnerContainer}>
          <Pressable
            onPress={() =>
              setArithmeticOperatorButton(!arithmeticOperatorButton)
            }>
            <ArithmeticOperatorButton
              isAddition={arithmeticOperatorButton}
              size={30}
            />
          </Pressable>
          <Text style={styles.featureTitle}>
            Add or subtract while converting
          </Text>
        </View>
        <Text style={styles.featureText}>
          The values that need converted are passed through a basic calculator.
          Addition is the default, but you can also use subtraction.
        </Text>
        <Text style={styles.example}>
          For example, you can find out how many hours and minutes are one day
          and 3 hours, or one day minus 3 hours
        </Text>
      </View>

      <View style={styles.featureOuterContainer}>
        <View style={styles.featureInnerContainer}>
          <CalculatorIcon size={30} />
          <Text style={styles.featureTitle}>Make direct calculations</Text>
        </View>
        <Text style={styles.featureText}>
          The tiles with this icon act as a calculator for composite
          measurements. The tiles with this icon act as a calculator for
          composite measurements.
        </Text>
        <Text style={styles.example}>
          For example, you can find convert kilometres and hour to feet per
          second. Why stop there, convert miles and inches, and seconds and days
          to inches per minue.
        </Text>
        <Text
          style={[
            styles.featureText,
            { fontWeight: "bold" },
            { marginTop: 5 },
          ]}>
          More calculators coming soon!
        </Text>
      </View>

      <View style={styles.dividingContainer}>
        <Divider />
      </View>

      <View style={styles.featureOuterContainer}>
        <View style={styles.featureInnerContainer}>
          <Pressable onPress={() => setFavouritesButton(!favouritesButton)}>
            <FavouritesIcon
              isFavourite={favouritesButton}
              strokeColour={theme.mainColour}
            />
          </Pressable>

          <Text style={styles.featureTitle}>
            Go-to combinations always ready
          </Text>
        </View>
        <Text style={styles.featureText}>
          Favourite any combination and access it from the Favourites tab, or
          from the Home screen.
        </Text>
      </View>

      <View style={styles.dividingContainer}>
        <Divider />
      </View>

      <View style={styles.featureOuterContainer}>
        <View style={styles.featureInnerContainer}>
          <KeyboardIcon />
          <Text style={styles.featureTitle}>Just type your conversion</Text>
        </View>

        <Text style={styles.featureText}>
          No more inputting at all... almost. Just type in your desired
          conversion and get the results.
        </Text>
        <TypingInput placeholderText="5 ft to m" />
        <Text style={styles.example}>
          Use the pattern: number - measure - TO - measure.
        </Text>
        <TypingInput placeholderText="5 ft 6 in to m cm" />
        <Text style={styles.example}>
          You can use more than one value for each, just remember that measures
          that are converted also need a value.
        </Text>
        <TypingInput placeholderText="5 ft 6 in" />
        <Text style={styles.example}>
          If the "to" keyword is missing, the values entered will be
          automatically converted to the best option.
        </Text>
        <Text style={[styles.example, { fontWeight: "bold" }]}>
          As this is still an experimental feature, make sure to expect some
          misses :)
        </Text>
      </View>

      <View style={styles.dividingContainer}>
        <Divider />
      </View>

      <View style={styles.featureOuterContainer}>
        <View style={styles.featureInnerContainer}>
          <Text style={[styles.featureTitle, { marginBottom: 0 }]}>
            Let's get in touch
          </Text>
        </View>

        <Text style={[styles.featureText, { marginBottom: 10 }]}>
          Want to request a feature or found some bugs?
        </Text>

        <Text style={[styles.featureText, { marginBottom: 10 }]}>
          Use the contact form on my portfolio page
        </Text>

        <View
          style={[
            { backgroundColor: theme.mainColour },
            largePortfolioContainer
              ? styles.portfolioLinkContainerLarge
              : styles.portfolioLinkContainer,
          ]}>
          <Pressable
            onPressIn={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setLargePortfolioContainer(true);
            }}
            onPressOut={() => setLargePortfolioContainer(false)}
            onPress={() => {
              Linking.openURL("https://ionut.cojocaru.co.uk/");
            }}>
            <Text style={[{ color: theme.gray1 }]}>cojocaru.co.uk</Text>
          </Pressable>
        </View>

        {/* <Text style={styles.featureText}>email me</Text> */}
      </View>

      <View style={styles.dividingContainer}>
        <Divider />
      </View>

      <View style={{ marginTop: 10 }}>
        <View style={[styles.littleCredentials, { flexDirection: "row" }]}>
          <Text style={styles.smallFont}>This app uses the </Text>
          <Text
            style={[styles.smallFont, { fontWeight: "bold" }]}
            onPress={() => {
              Linking.openURL(
                "https://www.npmjs.com/package/convert-units?activeTab=readme"
              );
            }}>
            convert-units
          </Text>
          <Text style={styles.smallFont}> library.</Text>
        </View>

        <View style={[styles.littleCredentials, { flexDirection: "row" }]}>
          <Text style={styles.smallFont}>Colours by </Text>
          <Text
            style={[styles.smallFont, { fontWeight: "bold" }]}
            onPress={() => {
              Linking.openURL("https://en.wikipedia.org/wiki/Sanzo_Wada");
            }}>
            Sanzo Wada
          </Text>
        </View>

        <View style={[styles.littleCredentials, { flexDirection: "row" }]}>
          <Text style={styles.smallFont}>Icons from </Text>
          <Text
            style={[styles.smallFont, { fontWeight: "bold" }]}
            onPress={() => {
              Linking.openURL("https://thenounproject.com/");
            }}>
            The Noun Project
          </Text>
        </View>

        <View
          style={[
            styles.littleCredentials,
            { flexDirection: "row" },
            { paddingTop: 0 },
          ]}>
          <Text style={styles.smallFont}>
            Abderraouf Omara, Abdul Karim, Adrien Coquet, Andrejs Kirma, Arthur
            Shlain, Beau Wingfield, Creative Stall, Ekaterina Martirosian, Fahmi
            Somdi Std, Flatart, Iconfield, I Cons, Jackvisual Assets, Julita
            Rodríguez, Kawalan Icon, M Zainur Rifqi, Mada Creative, Manglayang
            Studio, Megan Chown, Meko, Mohamed Mb, Ph_Ve, Sara Novovitch,
            Smashicons, 33studio, Timur Minvaleev, Universal Icons
          </Text>
        </View>
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
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
    fontWeight: "bold",
  },
  featureText: {},
  example: {
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 5,
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
  typingContainer: {
    width: "70%",
    height: 30,
    fontSize: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  portfolioLinkContainer: {
    width: 200,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  portfolioLinkContainerLarge: {
    width: 250,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dividingContainer: {
    alignItems: "center",
  },
});

export default Credentials;
