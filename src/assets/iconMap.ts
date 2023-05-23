import { ImageSourcePropType } from "react-native";

import angle from "../assets/icons/angle.png"
import apparentPower from "../assets/icons/apparentPower.png"
import area from "../assets/icons/area.png"
import bmi from "../assets/icons/bmi.png"
import current from "../assets/icons/current.png"
import digital from "../assets/icons/digital.png"
import energy from "../assets/icons/energy.png"
import frequency from "../assets/icons/frequency.png"
import illuminance from "../assets/icons/illuminance.png"
import length from "../assets/icons/length.png"
import mass from "../assets/icons/mass.png"
import pace from "../assets/icons/pace.png"
import partsPer from "../assets/icons/partsPer.png"
import power from "../assets/icons/power.png"
import pressure from "../assets/icons/pressure.png"
import reactiveEnergy from "../assets/icons/reactiveEnergy.png"
import reactivePower from "../assets/icons/reactivePower.png"
import speed from "../assets/icons/speed.png"
import temperature from "../assets/icons/temperature.png"
import time from "../assets/icons/time.png"
import voltage from "../assets/icons/voltage.png"
import volume from "../assets/icons/volume.png"
import volumeFlowRate from "../assets/icons/volumeFlowRate.png"
import weightLoss from "../assets/icons/weightLoss.png"

type IconMapType = {
    [key: string]: ImageSourcePropType;
}

const iconMap: IconMapType = {
    angle,
    apparentPower,
    area,
    bmi,
    current,
    digital,
    energy,
    frequency,
    illuminance,
    length,
    mass,
    pace,
    partsPer,
    power,
    pressure,
    reactiveEnergy,
    reactivePower,
    speed,
    temperature,
    time,
    voltage,
    volume,
    volumeFlowRate,
    weightLoss,
}

export default iconMap;