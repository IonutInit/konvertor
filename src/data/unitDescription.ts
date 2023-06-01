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

export type UnitDescription = {
  short: string[];
  long: string[];
};

export type DescriptionType = {
  [key: string]: UnitDescription;
  length: UnitDescription;
  area: UnitDescription;
  mass: UnitDescription;
  volume: UnitDescription;
  volumeFlowRate: UnitDescription;
  temperature: UnitDescription;
  time: UnitDescription;
  frequency: UnitDescription;
  speed: UnitDescription;
  pace: UnitDescription;
  pressure: UnitDescription;
  digital: UnitDescription;
  illuminance: UnitDescription;
  partsPer: UnitDescription;
  voltage: UnitDescription;
  current: UnitDescription;
  power: UnitDescription;
  apparentPower: UnitDescription;
  reactivePower: UnitDescription;
  energy: UnitDescription;
  reactiveEnergy: UnitDescription;
  angle: UnitDescription;
};

const description: DescriptionType = {
  length: {
    short: ["mm", "cm", "in", "ft", "ft-us", "yd", "m", "km", "mi"],
    long: [
      "millimeters",
      "centimeters",
      "inches",
      "feet",
      "us survey feet",
      "yards",
      "meters",
      "kilometers",
      "miles",
    ],
  },
  area: {
    short: ["mm2", "cm2", "in2", "ft2", "yd2", "m2", "ac", "ha", "km2", "mi2"],
    long: [
      "square millimeters",
      "centimeters",
      "square inches",
      "square feet",
      "square yards",
      "square meters",
      "acres",
      "hectares",
      "square kilometers",
      "square miles",
    ],
  },
  mass: {
    short: ["mcg", "mg", "g", "oz", "lb", "kg", "t", "mt"],
    long: [
      "micrograms",
      "milligrams",
      "grams",
      "ounces",
      "pounds",
      "kilograms",
      "tons",
      "metric tonnes",
    ],
  },
  volume: {
    short: [
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
    long: 
      [
        "cubic millimeters",
        "cubic centimeters",
        "millilitres",
        "matskedar",
        "teaspoons",
        "teskedar",
        "centilitres",
        "tablespoons",
        "matskedar",
        "cubic inches",
        "fluid ounces",
        "decilitres",
        "kaffekoppar",
        "glas",
        "cups",
        "pints",
        "quarts",
        "litres",
        "kannor",
        "gallons",
        "cubic feet",
        "cubic yards",
        "kilolitres",
        "cubic meters",
        "cubic kilometers",
      ],
  },
  volumeFlowRate: {
    short: [
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
    long: [
        "cubic millimeters per second",
        "cubic inches per hour",
        "fluid ounces per hour",
        "pints per hour",
        "cubic inches per minute",
        "litres per hour",
        "fluid ounces per minute",
        "cubic centimeters per second",
        "millilitres per second",
        "gallons per hour",
        "teaspoons per second",
        "cubic feet per hour",
        "pints per minute",
        "centilitres per second",
        "tablespoons per second",
        "cubic inches per second",
        "litres per minute",
        "fluid ounces per second",
        "gallons per minute",
        "decilitres per second",
        "cubic yards per hour",
        "cups per second",
        "kilolitres per hour",
        "cubic meters per hour",
        "cubic feet per minute",
        "pints per second",
        "quarts per second",
        "litres per second",
        "gallons per second",
        "cubic yards per minute",
        "kilolitres per minute",
        "cubic meters per minute",
        "cubic feet per second",
        "cubic yards per second",
        "kilolitres per second",
        "cubic meters per second",
        "cubic kilometers per second",
      ],
  },
  temperature: {
    short: ["R", "K", "F", "C"],
    long: [
        "degrees Rankine",
        "degrees Kelvin",
        "degrees Fahrenheit",
        "degrees Celsius",
      ],
  },
  time: {
    short: ["ns", "mu", "ms", "s", "min", "h", "d", "week", "month", "year"],
    long: [
        "nanoseconds",
        "microseconds",
        "milliseconds",
        "seconds",
        "minutes",
        "hours",
        "days",
        "weeks",
        "months",
        "years",
      ],
  },
  frequency: {
    short: ["mHz", "deg/s", "rpm", "rad/s", "Hz", "kHz", "MHz", "GHz", "THz"],
    long: [
      "millihertz",
      "degrees per second",
      "rotations per minute",
      "radians per second",
      "hertz",
      "kilohertz",
      "megahertz",
      "gigahertz",
      "terahertz",
    ],
  },
  speed: {
    short: ["km/h", "ft/s", "m/h", "knot", "m/s"],
    long: [
      "kilometres per hour",
      "feet per second",
      "miles per hour",
      "knots",
      "metres per second",
    ],
  },
  pace: {
    short: ["min/mi", "min/km", "s/m", "s/ft"],
    long: [
      "minutes per mile",
      "minutes per kilometre",
      "seconds per metre",
      "seconds per foot",
    ],
  },
  pressure: {
    short: ["Pa", "hPa", "torr", "kPa", "psi", "bar", "MPa", "ksi"],
    long: [
      "pascals",
      "hectopascals",
      "torr",
      "kilopascals",
      "pounds per square inch",
      "bar",
      "megapascals",
      "kilopound per square inch",
    ],
  },
  digital: {
    short: ["b", "B", "Kb", "KB", "Mb", "MB", "Gb", "GB", "Tb", "TB"],
    long: [
      "bits",
      "bytes",
      "kilobits",
      "kilobytes",
      "megabits",
      "megabytes",
      "gigabits",
      "gigabytes",
      "terabits",
      "terabytes",
    ],
  },
  illuminance: {
    short: ["lx", "ft-cd"],
    long: ["lux", "foot-candles"],
  },
  partsPer: {
    short: ["ppq", "ppt", "ppb", "ppm"],
    long: [
      "parts-per quadrillion",
      "parts-per trillion",
      "parts-per billion",
      "parts-per million",
    ],
  },
  voltage: {
    short: ["mV", "V", "kV"],
    long: ["millivolts", "volts", "kilovolts"],
  },
  //wrong!!!
  current: {
    short: ["mA", "A", "kA"],
    long: ["milliamperes", "amperes", "kiloamperes"],
  },
  power: {
    short: ["mA", "A", "kA"],
    long: ["milliamperes", "amperes", "kiloamperes"],
  },
  apparentPower: {
    short: ["mVA", "VA", "kVA", "MVA", "GVA"],
    long: [
      "millivolt-amperes",
      "volt-amperes",
      "kilovolt-amperes",
      "megavolt-amperes",
      "gigavolt-amperes",
    ],
  },
  reactivePower: {
    short: ["mVAR", "VAR", "kVAR", "MVAR", "GVAR"],
    long: [
      "millivolt-amperes reactive",
      "volt-amperes reactive",
      "kilovolt-amperes reactive",
      "megavolt-amperes reactive",
      "gigavolt-amperes reactive",
    ],
  },
  energy: {
    short: ["J", "mWh", "kJ", "Wh", "kWh", "MWh", "GWh"],
    long: [
      "joules",
      "milliwatt-hours",
      "kilojoules",
      "watt-hours",
      "kilowatt-hours",
      "megawatt-hours",
      "gigawatt-hours",
    ],
  },
  reactiveEnergy: {
    short: ["mVARh", "VARh", "kVARh", "MVARh", "GVARh"],
    long: [
      "millivolt-amperes reactive hour",
      "volt-amperes reactive hour",
      "kilovolt-amperes reactive hour",
      "megavolt-amperes reactive hour",
      "gigavolt-amperes reactive hour",
    ],
  },
  angle: {
    short: ["arcsec", "arcmin", "grad", "deg", "rad"],
    long: ["arcseconds", "arcminutes", "gradians", "degrees", "radians"],
  },
};

export default description;
