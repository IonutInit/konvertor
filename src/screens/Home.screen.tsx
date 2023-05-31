import { useLayoutEffect } from "react";

import useAppContext from "../context/useAppContext";

import Options from "./Options.home.screens";
import Konvertor from "./Konvertor.home.screen";
import BMI from "./BMI.screen";
import WeightLoss from "./WeightLoss.screen";

import useGetInFocus from "../hooks/useGetInFocus";

const Home = ({ navigation }: any) => {
  const {
    state: { konvertor },
    dispatch,
  } = useAppContext();

  useGetInFocus(navigation, dispatch, "Home");

  return (
    <>
      {konvertor === "" && <Options />}
      {konvertor === "konvertor" && <Konvertor />}
      {konvertor === "BMI" && <BMI />}
      {konvertor === "Weight Loss" && <WeightLoss />}
    </>
  );
};

export default Home;
