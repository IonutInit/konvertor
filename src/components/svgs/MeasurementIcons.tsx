import * as React from "react";

import Length from "./measurement/Length";
import Area from "./measurement/Area";
import Mass from "./measurement/Mass";
import Volume from "./measurement/Volume";
import Temperature from "./measurement/Temperature";
import Time from "./measurement/Time";
import Frequency from "./measurement/Frequency";
import Speed from "./measurement/Speed";
import Digital from "./measurement/Digital";
import Angle from "./measurement/Angle";
import VolumeFlowRate from "./measurement/VolumeFlowRate";
import Pace from "./measurement/Pace";
import Pressure from "./measurement/Pressure";
import Illuminance from "./measurement/Illuminance";
import PartsPer from "./measurement/PartsPer";
import Voltage from "./measurement/Voltage";
import Current from "./measurement/Current";
import Power from "./measurement/Power";
import ApparentPower from "./measurement/ApparentPower";
import ReactivePower from "./measurement/ReactivePower";
import Energy from "./measurement/Energy";
import ReactiveEvergy from "./measurement/ReactiveEnergy";

import Bmi from "./measurement/Bmi";
import WeightLoss from "./measurement/WeigthLoss";

import AreaCalc from "./measurement/AreaCalc";
import VolumeCalc from "./measurement/VolumeCalc";
import SpeedCalc from "./measurement/SpeedCalc";
import DensityCalculator from "./measurement/DensityCalculator";

import getTheme from "../../context/theme";

export type SvgProps = {
  size: number;
  mainColour: string;
  secondaryColour: string;
};

type Props = {
  type: string;
  mainColour?: string;
  secondaryColour?: string;
  size?: number;
};

const MeasurementIcons = ({
  type,
  mainColour = getTheme().mainColour,
  secondaryColour = getTheme().secondaryColour,
  size = 45,
}: Props) => {
  const props = {
    size,
    mainColour,
    secondaryColour,
  };

  return (
    <>
      {type === "length" && <Length {...props} />}
      {type === "area" && <Area {...props} />}
      {type === "mass" && <Mass {...props} />}
      {type === "volume" && <Volume {...props} />}
      {type === "temperature" && <Temperature {...props} />}
      {type === "time" && <Time {...props} />}
      {type === "frequency" && <Frequency {...props} />}
      {type === "speed" && <Speed {...props} />}
      {type === "digital" && <Digital {...props} />}
      {type === "angle" && <Angle {...props} />}
      {type === "volumeFlowRate" && <VolumeFlowRate {...props} />}
      {type === "pace" && <Pace {...props} />}
      {type === "pressure" && <Pressure {...props} />}
      {type === "illuminance" && <Illuminance {...props} />}
      {type === "partsPer" && <PartsPer {...props} />}
      {type === "voltage" && <Voltage {...props} />}
      {type === "current" && <Current {...props} />}
      {type === "power" && <Power {...props} />}
      {type === "apparentPower" && <ApparentPower {...props} />}
      {type === "reactivePower" && <ReactivePower {...props} />}
      {type === "energy" && <Energy {...props} />}
      {type === "reactiveEnergy" && <ReactiveEvergy {...props} />}
      {type === "bmi" && <Bmi {...props} />}
      {type === "weightLoss" && <WeightLoss {...props} />}
      {type === "areaCalc" && <AreaCalc {...props} />}
      {/* {type === "volumeCalc" && <VolumeCalc {...props} />} */}
      {type === "speedCalc" && <SpeedCalc {...props} />}
      {type === "densityCalc" && <DensityCalculator {...props} />}
    </>
  );
};

export default MeasurementIcons;
