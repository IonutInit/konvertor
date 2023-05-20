//a one-time calculation returning all units arranged in ascending order, for the purpose of toUnit additions returning options smaller than the active unit

// import convert from "convert-units";

// type ArrayElementType = {
//   name: string;
//   value: number;
// };

// function getData(unit: string) {
//   const conversion = convert()
//     .from(unit)
//     .possibilities()
//     .map((i: string) => ({
//       name: i,
//       value: convert(10).from(unit).to(i),
//     }));

//   return conversion
//     .sort((a: ArrayElementType, b: ArrayElementType) => b.value - a.value)
//     .map((obj: ArrayElementType) => obj.name);
// }

const description: { [key: string]: string[] } = {
  length: ["mm", "cm", "in", "ft", "ft-us", "yd", "m", "km", "mi"],
  area: ["mm2", "cm2", "in2", "ft2", "yd2", "m2", "ac", "ha", "km2", "mi2"],
  mass: ["mcg", "mg", "g", "oz", "lb", "kg", "t", "mt"],
  volume: [
    "mm3",
    "cm3",
    "ml",
    "krm",
    "tsp",
    "tsk",
    "cl",
    "Tbs",
    "msk",
    "in3",
    "fl-oz",
    "dl",
    "kkp",
    "glas",
    "cup",
    "pnt",
    "qt",
    "l",
    "kanna",
    "gal",
    "ft3",
    "yd3",
    "kl",
    "m3",
    "km3",
  ],
  volumeFlowRate: [
    "mm3/s",
    "in3/h",
    "fl-oz/h",
    "pnt/h",
    "in3/min",
    "l/h",
    "fl-oz/min",
    "cm3/s",
    "ml/s",
    "gal/h",
    "tsp/s",
    "ft3/h",
    "pnt/min",
    "cl/s",
    "Tbs/s",
    "in3/s",
    "l/min",
    "fl-oz/s",
    "gal/min",
    "dl/s",
    "yd3/h",
    "cup/s",
    "kl/h",
    "m3/h",
    "ft3/min",
    "pnt/s",
    "qt/s",
    "l/s",
    "gal/s",
    "yd3/min",
    "kl/min",
    "m3/min",
    "ft3/s",
    "yd3/s",
    "kl/s",
    "m3/s",
    "km3/s",
  ],
  temperature: ["R", "K", "F", "C"],
  time: ["ns", "mu", "ms", "s", "min", "h", "d", "week", "month", "year"],
  frequency: ["mHz", "deg/s", "rpm", "rad/s", "Hz", "kHz", "MHz", "GHz", "THz"],
  speed: ["km/h", "ft/s", "m/h", "knot", "m/s"],
  pace: ["min/mi", "min/km", "s/m", "s/ft"],
  pressure: ["Pa", "hPa", "torr", "kPa", "psi", "bar", "MPa", "ksi"],
  digital: ["b", "B", "Kb", "KB", "Mb", "MB", "Gb", "GB", "Tb", "TB"],
  illuminance: ["lx", "ft-cd"],
  partsPer: ["ppq", "ppt", "ppb", "ppm"],
  voltage: ["mV", "V", "kV"],
  current: ["mA", "A", "kA"],
  power: ["mW", "W", "kW", "MW", "GW"],
  apparentPower: ["mVA", "VA", "kVA", "MVA", "GVA"],
  reactivePower: ["mVAR", "VAR", "kVAR", "MVAR", "GVAR"],
  energy: ["J", "mWh", "kJ", "Wh", "kWh", "MWh", "GWh"],
  reactiveEnergy: ["mVARh", "VARh", "kVARh", "MVARh", "GVARh"],
  angle: ["arcsec", "arcmin", "grad", "deg", "rad"],
};

export default description;
