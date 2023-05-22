import useAppContext from "../context/useAppContext";

import Options from "./Options.home.screens";
import Konvertor from "./Konvertor.home.screen";
import BMI from "./BMI.screen";
import WeightLoss from "./WeightLoss.screen";

const Home = () => {
  const {
    state: { konvertor },
  } = useAppContext();

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
