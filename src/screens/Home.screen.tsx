import useAppContext from "../context/useAppContext";

import { View, Text } from "react-native";

import Options from "./Options.home.screens";
import Konvertor from "./Konvertor.home.screen";

const Home = () => {
  const {
    state: { konvertor },
  } = useAppContext();

  return konvertor ? <Konvertor /> : <Options />;
};

export default Home;
