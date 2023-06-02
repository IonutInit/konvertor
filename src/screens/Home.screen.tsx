import { useLayoutEffect } from "react";

import useAppContext from "../context/useAppContext";

import Options from "./Options.home.screens";
import Konvertor from "./Konvertor.home.screen";
import BMI from "./BMI.screen_temp";
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
      {konvertor === "bmi" && <BMI />}
      {konvertor === "weightLoss" && <WeightLoss />}
    </>
  );
};

export default Home;
