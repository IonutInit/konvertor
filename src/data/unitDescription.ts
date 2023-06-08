//@ts-nocheck

//a one-time calculation returning all units arranged in ascending order, for the purpose of toUnit additions returning options smaller than the active unit

import convert from "../lib/converter-library/lib";
import "../lib/converter-library/convert.d.ts";

function getUnitDescription(units: string[]) {
  const result: {
    [key: string]: { short: string[]; long: string[]; singular: string[] };
  } = {};

  units.forEach((unit) => {
    const long = [];
    const singular = [];

    const measureType = convert().describe(unit).measure;

    const conversion = convert()
      .from(unit)
      .possibilities()
      .map((i: string) => ({
        name: i,
        value: convert(10).from(unit).to(i),
      }));

    const short = conversion
      .sort((a: ArrayElementType, b: ArrayElementType) => b.value - a.value)
      .map((obj: ArrayElementType) => obj.name);

    short.forEach((unit) => {
      long.push(
        convert()
          .describe(unit as string)
          .plural.toLowerCase()
      );
    });

    short.forEach((unit) => {
      singular.push(
        convert()
          .describe(unit as string)
          .singular.toLowerCase()
      );
    });

    result[measureType] = { short, long, singular };
  });

  return result;
}

export type UnitDescription = {
  [key: string]: string[];
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
  apparentPower: UnitDescription;
  reactivePower: UnitDescription;
  energy: UnitDescription;
  reactiveEnergy: UnitDescription;
  angle: UnitDescription;
};

const description: DescriptionType = getUnitDescription([
  "m",
  "m2",
  "kg",
  "ml",
  "l/s",
  "C",
  "min",
  "Hz",
  "km/h",
  "s/m",
  "Pa",
  "b",
  "lx",
  "ppm",
  "V",
  "A",
  "VA",
  "VAR",
  "Wh",
  "VARh",
  "deg",
]);

// const description: DescriptionType = {
//   "length": {
//       "short": [
//           "mm",
//           "cm",
//           "in",
//           "ft",
//           "ft-us",
//           "yd",
//           "m",
//           "km",
//           "mi"
//       ],
//       "long": [
//           "millimeters",
//           "centimeters",
//           "inches",
//           "feet",
//           "us survey feet",
//           "yards",
//           "meters",
//           "kilometers",
//           "miles"
//       ],
//       "singular": [
//           "millimeter",
//           "centimeter",
//           "inch",
//           "foot",
//           "us survey foot",
//           "yard",
//           "meter",
//           "kilometer",
//           "mile"
//       ]
//   },
//   "area": {
//       "short": [
//           "mm2",
//           "cm2",
//           "in2",
//           "ft2",
//           "yd2",
//           "m2",
//           "ac",
//           "ha",
//           "km2",
//           "mi2"
//       ],
//       "long": [
//           "square millimeters",
//           "centimeters",
//           "square inches",
//           "square feet",
//           "square yards",
//           "square meters",
//           "acres",
//           "hectares",
//           "square kilometers",
//           "square miles"
//       ],
//       "singular": [
//           "square millimeter",
//           "centimeter",
//           "square inch",
//           "square foot",
//           "square yard",
//           "square meter",
//           "acre",
//           "hectare",
//           "square kilometer",
//           "square mile"
//       ]
//   },
//   "mass": {
//       "short": [
//           "mcg",
//           "mg",
//           "g",
//           "oz",
//           "lb",
//           "kg",
//           "stone",
//           "t",
//           "mt"
//       ],
//       "long": [
//           "micrograms",
//           "milligrams",
//           "grams",
//           "ounces",
//           "pounds",
//           "kilograms",
//           "stones",
//           "tons",
//           "metric tonnes"
//       ],
//       "singular": [
//           "microgram",
//           "milligram",
//           "gram",
//           "ounce",
//           "pound",
//           "kilogram",
//           "stone",
//           "ton",
//           "metric tonne"
//       ]
//   },
//   "volume": {
//       "short": [
//           "mm3",
//           "cm3",
//           "ml",
//           "krm",
//           "tsp",
//           "tsk",
//           "cl",
//           "Tbs",
//           "msk",
//           "in3",
//           "fl-oz",
//           "dl",
//           "kkp",
//           "glas",
//           "cup",
//           "pnt",
//           "qt",
//           "l",
//           "kanna",
//           "gal",
//           "ft3",
//           "yd3",
//           "kl",
//           "m3",
//           "km3"
//       ],
//       "long": [
//           "cubic millimeters",
//           "cubic centimeters",
//           "millilitres",
//           "matskedar",
//           "teaspoons",
//           "teskedar",
//           "centilitres",
//           "tablespoons",
//           "matskedar",
//           "cubic inches",
//           "fluid ounces",
//           "decilitres",
//           "kaffekoppar",
//           "glas",
//           "cups",
//           "pints",
//           "quarts",
//           "litres",
//           "kannor",
//           "gallons",
//           "cubic feet",
//           "cubic yards",
//           "kilolitres",
//           "cubic meters",
//           "cubic kilometers"
//       ],
//       "singular": [
//           "cubic millimeter",
//           "cubic centimeter",
//           "millilitre",
//           "matsked",
//           "teaspoon",
//           "tesked",
//           "centilitre",
//           "tablespoon",
//           "matsked",
//           "cubic inch",
//           "fluid ounce",
//           "decilitre",
//           "kaffekopp",
//           "glas",
//           "cup",
//           "pint",
//           "quart",
//           "litre",
//           "kanna",
//           "gallon",
//           "cubic foot",
//           "cubic yard",
//           "kilolitre",
//           "cubic meter",
//           "cubic kilometer"
//       ]
//   },
//   "volumeFlowRate": {
//       "short": [
//           "mm3/s",
//           "in3/h",
//           "fl-oz/h",
//           "pnt/h",
//           "in3/min",
//           "l/h",
//           "fl-oz/min",
//           "cm3/s",
//           "ml/s",
//           "gal/h",
//           "tsp/s",
//           "ft3/h",
//           "pnt/min",
//           "cl/s",
//           "Tbs/s",
//           "in3/s",
//           "l/min",
//           "fl-oz/s",
//           "gal/min",
//           "dl/s",
//           "yd3/h",
//           "cup/s",
//           "kl/h",
//           "m3/h",
//           "ft3/min",
//           "pnt/s",
//           "qt/s",
//           "l/s",
//           "gal/s",
//           "yd3/min",
//           "kl/min",
//           "m3/min",
//           "ft3/s",
//           "yd3/s",
//           "kl/s",
//           "m3/s",
//           "km3/s"
//       ],
//       "long": [
//           "cubic millimeters per second",
//           "cubic inches per hour",
//           "fluid ounces per hour",
//           "pints per hour",
//           "cubic inches per minute",
//           "litres per hour",
//           "fluid ounces per minute",
//           "cubic centimeters per second",
//           "millilitres per second",
//           "gallons per hour",
//           "teaspoons per second",
//           "cubic feet per hour",
//           "pints per minute",
//           "centilitres per second",
//           "tablespoons per second",
//           "cubic inches per second",
//           "litres per minute",
//           "fluid ounces per second",
//           "gallons per minute",
//           "decilitres per second",
//           "cubic yards per hour",
//           "cups per second",
//           "kilolitres per hour",
//           "cubic meters per hour",
//           "cubic feet per minute",
//           "pints per second",
//           "quarts per second",
//           "litres per second",
//           "gallons per second",
//           "cubic yards per minute",
//           "kilolitres per minute",
//           "cubic meters per minute",
//           "cubic feet per second",
//           "cubic yards per second",
//           "kilolitres per second",
//           "cubic meters per second",
//           "cubic kilometers per second"
//       ],
//       "singular": [
//           "cubic millimeter per second",
//           "cubic inch per hour",
//           "fluid ounce per hour",
//           "pint per hour",
//           "cubic inch per minute",
//           "litre per hour",
//           "fluid ounce per minute",
//           "cubic centimeter per second",
//           "millilitre per second",
//           "gallon per hour",
//           "teaspoon per second",
//           "cubic foot per hour",
//           "pint per minute",
//           "centilitre per second",
//           "tablespoon per second",
//           "cubic inch per second",
//           "litre per minute",
//           "fluid ounce per second",
//           "gallon per minute",
//           "decilitre per second",
//           "cubic yard per hour",
//           "cup per second",
//           "kilolitre per hour",
//           "cubic meter per hour",
//           "cubic foot per minute",
//           "pint per second",
//           "quart per second",
//           "litre per second",
//           "gallon per second",
//           "cubic yard per minute",
//           "kilolitre per minute",
//           "cubic meter per minute",
//           "cubic foot per second",
//           "cubic yard per second",
//           "kilolitre per second",
//           "cubic meter per second",
//           "cubic kilometer per second"
//       ]
//   },
//   "temperature": {
//       "short": [
//           "R",
//           "K",
//           "F",
//           "C"
//       ],
//       "long": [
//           "rankine",
//           "kelvin",
//           "fahrenheit",
//           "celsius"
//       ],
//       "singular": [
//           "rankine",
//           "kelvin",
//           "fahrenheit",
//           "celsius"
//       ]
//   },
//   "time": {
//       "short": [
//           "ns",
//           "mu",
//           "ms",
//           "s",
//           "min",
//           "h",
//           "d",
//           "week",
//           "month",
//           "year"
//       ],
//       "long": [
//           "nanoseconds",
//           "microseconds",
//           "milliseconds",
//           "seconds",
//           "minutes",
//           "hours",
//           "days",
//           "weeks",
//           "months",
//           "years"
//       ],
//       "singular": [
//           "nanosecond",
//           "microsecond",
//           "millisecond",
//           "second",
//           "minute",
//           "hour",
//           "day",
//           "week",
//           "month",
//           "year"
//       ]
//   },
//   "frequency": {
//       "short": [
//           "mHz",
//           "deg/s",
//           "rpm",
//           "rad/s",
//           "Hz",
//           "kHz",
//           "MHz",
//           "GHz",
//           "THz"
//       ],
//       "long": [
//           "millihertz",
//           "degrees per second",
//           "rotations per minute",
//           "radians per second",
//           "hertz",
//           "kilohertz",
//           "megahertz",
//           "gigahertz",
//           "terahertz"
//       ],
//       "singular": [
//           "millihertz",
//           "degree per second",
//           "rotation per minute",
//           "radian per second",
//           "hertz",
//           "kilohertz",
//           "megahertz",
//           "gigahertz",
//           "terahertz"
//       ]
//   },
//   "speed": {
//       "short": [
//           "km/h",
//           "ft/s",
//           "m/h",
//           "knot",
//           "m/s"
//       ],
//       "long": [
//           "kilometres per hour",
//           "feet per second",
//           "miles per hour",
//           "knots",
//           "metres per second"
//       ],
//       "singular": [
//           "kilometre per hour",
//           "foot per second",
//           "mile per hour",
//           "knot",
//           "metre per second"
//       ]
//   },
//   "pace": {
//       "short": [
//           "min/mi",
//           "min/km",
//           "s/m",
//           "s/ft"
//       ],
//       "long": [
//           "minutes per mile",
//           "minutes per kilometre",
//           "seconds per metre",
//           "seconds per foot"
//       ],
//       "singular": [
//           "minute per mile",
//           "minute per kilometre",
//           "second per metre",
//           "second per foot"
//       ]
//   },
//   "pressure": {
//       "short": [
//           "Pa",
//           "hPa",
//           "torr",
//           "kPa",
//           "psi",
//           "bar",
//           "MPa",
//           "ksi"
//       ],
//       "long": [
//           "pascals",
//           "hectopascals",
//           "torr",
//           "kilopascals",
//           "pounds per square inch",
//           "bar",
//           "megapascals",
//           "kilopound per square inch"
//       ],
//       "singular": [
//           "pascal",
//           "hectopascal",
//           "torr",
//           "kilopascal",
//           "pound per square inch",
//           "bar",
//           "megapascal",
//           "kilopound per square inch"
//       ]
//   },
//   "digital": {
//       "short": [
//           "b",
//           "B",
//           "Kb",
//           "KB",
//           "Mb",
//           "MB",
//           "Gb",
//           "GB",
//           "Tb",
//           "TB"
//       ],
//       "long": [
//           "bits",
//           "bytes",
//           "kilobits",
//           "kilobytes",
//           "megabits",
//           "megabytes",
//           "gigabits",
//           "gigabytes",
//           "terabits",
//           "terabytes"
//       ],
//       "singular": [
//           "bit",
//           "byte",
//           "kilobit",
//           "kilobyte",
//           "megabit",
//           "megabyte",
//           "gigabit",
//           "gigabyte",
//           "terabit",
//           "terabyte"
//       ]
//   },
//   "illuminance": {
//       "short": [
//           "lx",
//           "ft-cd"
//       ],
//       "long": [
//           "lux",
//           "foot-candles"
//       ],
//       "singular": [
//           "lux",
//           "foot-candle"
//       ]
//   },
//   "partsPer": {
//       "short": [
//           "ppq",
//           "ppt",
//           "ppb",
//           "ppm"
//       ],
//       "long": [
//           "parts-per quadrillion",
//           "parts-per trillion",
//           "parts-per billion",
//           "parts-per million"
//       ],
//       "singular": [
//           "part-per quadrillion",
//           "part-per trillion",
//           "part-per billion",
//           "part-per million"
//       ]
//   },
//   "voltage": {
//       "short": [
//           "mV",
//           "V",
//           "kV"
//       ],
//       "long": [
//           "millivolts",
//           "volts",
//           "kilovolts"
//       ],
//       "singular": [
//           "millivolt",
//           "volt",
//           "kilovolt"
//       ]
//   },
//   "current": {
//       "short": [
//           "mA",
//           "A",
//           "kA"
//       ],
//       "long": [
//           "milliamperes",
//           "amperes",
//           "kiloamperes"
//       ],
//       "singular": [
//           "milliampere",
//           "ampere",
//           "kiloampere"
//       ]
//   },
//   "apparentPower": {
//       "short": [
//           "mVA",
//           "VA",
//           "kVA",
//           "MVA",
//           "GVA"
//       ],
//       "long": [
//           "millivolt-amperes",
//           "volt-amperes",
//           "kilovolt-amperes",
//           "megavolt-amperes",
//           "gigavolt-amperes"
//       ],
//       "singular": [
//           "millivolt-ampere",
//           "volt-ampere",
//           "kilovolt-ampere",
//           "megavolt-ampere",
//           "gigavolt-ampere"
//       ]
//   },
//   "reactivePower": {
//       "short": [
//           "mVAR",
//           "VAR",
//           "kVAR",
//           "MVAR",
//           "GVAR"
//       ],
//       "long": [
//           "millivolt-amperes reactive",
//           "volt-amperes reactive",
//           "kilovolt-amperes reactive",
//           "megavolt-amperes reactive",
//           "gigavolt-amperes reactive"
//       ],
//       "singular": [
//           "millivolt-ampere reactive",
//           "volt-ampere reactive",
//           "kilovolt-ampere reactive",
//           "megavolt-ampere reactive",
//           "gigavolt-ampere reactive"
//       ]
//   },
//   "energy": {
//       "short": [
//           "J",
//           "mWh",
//           "kJ",
//           "Wh",
//           "kWh",
//           "MWh",
//           "GWh"
//       ],
//       "long": [
//           "joules",
//           "milliwatt-hours",
//           "kilojoules",
//           "watt-hours",
//           "kilowatt-hours",
//           "megawatt-hours",
//           "gigawatt-hours"
//       ],
//       "singular": [
//           "joule",
//           "milliwatt-hour",
//           "kilojoule",
//           "watt-hour",
//           "kilowatt-hour",
//           "megawatt-hour",
//           "gigawatt-hour"
//       ]
//   },
//   "reactiveEnergy": {
//       "short": [
//           "mVARh",
//           "VARh",
//           "kVARh",
//           "MVARh",
//           "GVARh"
//       ],
//       "long": [
//           "millivolt-amperes reactive hour",
//           "volt-amperes reactive hour",
//           "kilovolt-amperes reactive hour",
//           "megavolt-amperes reactive hour",
//           "gigavolt-amperes reactive hour"
//       ],
//       "singular": [
//           "millivolt-ampere reactive hour",
//           "volt-ampere reactive hour",
//           "kilovolt-ampere reactive hour",
//           "megavolt-ampere reactive hour",
//           "gigavolt-ampere reactive hour"
//       ]
//   },
//   "angle": {
//       "short": [
//           "arcsec",
//           "arcmin",
//           "grad",
//           "deg",
//           "rad"
//       ],
//       "long": [
//           "arcseconds",
//           "arcminutes",
//           "gradians",
//           "degrees",
//           "radians"
//       ],
//       "singular": [
//           "arcsecond",
//           "arcminute",
//           "gradian",
//           "degree",
//           "radian"
//       ]
//   }
// }

// const description: DescriptionType = {
//   length: {
//     short: ["mm", "cm", "in", "ft", "ft-us", "yd", "m", "km", "mi"],
//     long: [
//       "millimeters",
//       "centimeters",
//       "inches",
//       "feet",
//       "us survey feet",
//       "yards",
//       "meters",
//       "kilometers",
//       "miles",
//     ],
//   },
//   area: {
//     short: ["mm2", "cm2", "in2", "ft2", "yd2", "m2", "ac", "ha", "km2", "mi2"],
//     long: [
//       "square millimeters",
//       "square centimeters",
//       "square inches",
//       "square feet",
//       "square yards",
//       "square meters",
//       "acres",
//       "hectares",
//       "square kilometers",
//       "square miles",
//     ],
//   },
//   mass: {
//     short: [
//       "mcg",
//       "mg",
//       "g",
//       "oz",
//       "lb",
//       "kg",
//       // "stone",
//       "t",
//       "mt",
//     ],
//     long: [
//       "micrograms",
//       "milligrams",
//       "grams",
//       "ounces",
//       "pounds",
//       "kilograms",
//       // "stones",
//       "tons",
//       "metric tonnes",
//     ],
//   },
//   volume: {
//     short: [
//       "mm3",
//       "cm3",
//       "ml",
//       // "krm",
//       "tsp",
//       // "tsk",
//       "cl",
//       "Tbs",
//       // "msk",
//       "in3",
//       "fl-oz",
//       "dl",
//       // "kkp",
//       "glas",
//       "cup",
//       "pnt",
//       "qt",
//       "l",
//       // "kanna",
//       "gal",
//       "ft3",
//       "yd3",
//       "kl",
//       "m3",
//       "km3",
//     ],
//     long: [
//       "cubic millimeters",
//       "cubic centimeters",
//       "millilitres",
//       // "matskedar",
//       "teaspoons",
//       // "teskedar",
//       "centilitres",
//       "tablespoons",
//       // "matskedar",
//       "cubic inches",
//       "fluid ounces",
//       "decilitres",
//       // "kaffekoppar",
//       "glas",
//       "cups",
//       "pints",
//       "quarts",
//       "litres",
//       // "kannor",
//       "gallons",
//       "cubic feet",
//       "cubic yards",
//       "kilolitres",
//       "cubic meters",
//       "cubic kilometers",
//     ],
//   },
//   density: {
//     short: ["g/cm3", "kg/m3"],
//     long: ["grams per cu. cm", "kilograms per cu meter"],
//   },
//   volumeFlowRate: {
//     short: [
//       "mm3/s",
//       "in3/h",
//       "fl-oz/h",
//       "pnt/h",
//       "in3/min",
//       "l/h",
//       "fl-oz/min",
//       "cm3/s",
//       "ml/s",
//       "gal/h",
//       "tsp/s",
//       "ft3/h",
//       "pnt/min",
//       "cl/s",
//       "Tbs/s",
//       "in3/s",
//       "l/min",
//       "fl-oz/s",
//       "gal/min",
//       "dl/s",
//       "yd3/h",
//       "cup/s",
//       "kl/h",
//       "m3/h",
//       "ft3/min",
//       "pnt/s",
//       "qt/s",
//       "l/s",
//       "gal/s",
//       "yd3/min",
//       "kl/min",
//       "m3/min",
//       "ft3/s",
//       "yd3/s",
//       "kl/s",
//       "m3/s",
//       "km3/s",
//     ],
//     long: [
//       "cubic millimeters per second",
//       "cubic inches per hour",
//       "fluid ounces per hour",
//       "pints per hour",
//       "cubic inches per minute",
//       "litres per hour",
//       "fluid ounces per minute",
//       "cubic centimeters per second",
//       "millilitres per second",
//       "gallons per hour",
//       "teaspoons per second",
//       "cubic feet per hour",
//       "pints per minute",
//       "centilitres per second",
//       "tablespoons per second",
//       "cubic inches per second",
//       "litres per minute",
//       "fluid ounces per second",
//       "gallons per minute",
//       "decilitres per second",
//       "cubic yards per hour",
//       "cups per second",
//       "kilolitres per hour",
//       "cubic meters per hour",
//       "cubic feet per minute",
//       "pints per second",
//       "quarts per second",
//       "litres per second",
//       "gallons per second",
//       "cubic yards per minute",
//       "kilolitres per minute",
//       "cubic meters per minute",
//       "cubic feet per second",
//       "cubic yards per second",
//       "kilolitres per second",
//       "cubic meters per second",
//       "cubic kilometers per second",
//     ],
//   },
//   temperature: {
//     short: ["R", "K", "F", "C"],
//     long: ["Rankine", "Kelvin", "Fahrenheit", "Celsius"],
//   },
//   time: {
//     short: ["ns", "mu", "ms", "s", "min", "h", "d", "week", "month", "year"],
//     long: [
//       "nanoseconds",
//       "microseconds",
//       "milliseconds",
//       "seconds",
//       "minutes",
//       "hours",
//       "days",
//       "weeks",
//       "months",
//       "years",
//     ],
//   },
//   frequency: {
//     short: ["mHz", "deg/s", "rpm", "rad/s", "Hz", "kHz", "MHz", "GHz", "THz"],
//     long: [
//       "millihertz",
//       "degrees per second",
//       "rotations per minute",
//       "radians per second",
//       "hertz",
//       "kilohertz",
//       "megahertz",
//       "gigahertz",
//       "terahertz",
//     ],
//   },
//   speed: {
//     short: ["km/h", "ft/s", "m/h", "knot", "m/s"],
//     long: [
//       "kilometres per hour",
//       "feet per second",
//       "miles per hour",
//       "knots",
//       "metres per second",
//     ],
//   },
//   pace: {
//     short: ["min/mi", "min/km", "s/m", "s/ft"],
//     long: [
//       "minutes per mile",
//       "minutes per kilometre",
//       "seconds per metre",
//       "seconds per foot",
//     ],
//   },
//   pressure: {
//     short: ["Pa", "hPa", "torr", "kPa", "psi", "bar", "MPa", "ksi"],
//     long: [
//       "pascals",
//       "hectopascals",
//       "torr",
//       "kilopascals",
//       "pounds per square inch",
//       "bar",
//       "megapascals",
//       "kilopound per square inch",
//     ],
//   },
//   digital: {
//     short: ["b", "B", "Kb", "KB", "Mb", "MB", "Gb", "GB", "Tb", "TB"],
//     long: [
//       "bits",
//       "bytes",
//       "kilobits",
//       "kilobytes",
//       "megabits",
//       "megabytes",
//       "gigabits",
//       "gigabytes",
//       "terabits",
//       "terabytes",
//     ],
//   },
//   illuminance: {
//     short: ["lx", "ft-cd"],
//     long: ["lux", "foot-candles"],
//   },
//   partsPer: {
//     short: ["ppq", "ppt", "ppb", "ppm"],
//     long: [
//       "parts-per quadrillion",
//       "parts-per trillion",
//       "parts-per billion",
//       "parts-per million",
//     ],
//   },
//   voltage: {
//     short: ["mV", "V", "kV"],
//     long: ["millivolts", "volts", "kilovolts"],
//   },
//   //wrong!!!
//   current: {
//     short: ["mA", "A", "kA"],
//     long: ["milliamperes", "amperes", "kiloamperes"],
//   },
//   power: {
//     short: ["mA", "A", "kA"],
//     long: ["milliamperes", "amperes", "kiloamperes"],
//   },
//   apparentPower: {
//     short: ["mVA", "VA", "kVA", "MVA", "GVA"],
//     long: [
//       "millivolt-amperes",
//       "volt-amperes",
//       "kilovolt-amperes",
//       "megavolt-amperes",
//       "gigavolt-amperes",
//     ],
//   },
//   reactivePower: {
//     short: ["mVAR", "VAR", "kVAR", "MVAR", "GVAR"],
//     long: [
//       "millivolt-amperes reactive",
//       "volt-amperes reactive",
//       "kilovolt-amperes reactive",
//       "megavolt-amperes reactive",
//       "gigavolt-amperes reactive",
//     ],
//   },
//   energy: {
//     short: ["J", "mWh", "kJ", "Wh", "kWh", "MWh", "GWh"],
//     long: [
//       "joules",
//       "milliwatt-hours",
//       "kilojoules",
//       "watt-hours",
//       "kilowatt-hours",
//       "megawatt-hours",
//       "gigawatt-hours",
//     ],
//   },
//   reactiveEnergy: {
//     short: ["mVARh", "VARh", "kVARh", "MVARh", "GVARh"],
//     long: [
//       "millivolt-amperes reactive hour",
//       "volt-amperes reactive hour",
//       "kilovolt-amperes reactive hour",
//       "megavolt-amperes reactive hour",
//       "gigavolt-amperes reactive hour",
//     ],
//   },
//   angle: {
//     short: ["arcsec", "arcmin", "grad", "deg", "rad"],
//     long: ["arcseconds", "arcminutes", "gradians", "degrees", "radians"],
//   },
// };

export default description;
