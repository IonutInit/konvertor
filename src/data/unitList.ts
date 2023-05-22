const unitList = [
  {
    measure: "Length",
    default: ["m", "ft"],
    primary: true,
  },
  {
    measure: "Area",
    default: ["m2", "ft2"],
    primary: true,
  },
  {
    measure: "Mass",
    default: ["kg", "lb"],
    primary: true,
  },
  {
    measure: "Volume",
    default: ["ml", "tsp"],
    primary: true,
  },
  {
    measure: "Volume Flow Rate",
    default: ["l/s", "gal/min"],
    primary: false,
  },
  {
    measure: "Temperature",
    default: ["C", "F"],
    primary: true,
  },
  {
    measure: "Time",
    default: ["min", "h"],
    primary: true,
  },
  {
    measure: "Frequency",
    default: ["Hz", "rad/s"],
    primary: true,
  },
  {
    measure: "Speed",
    default: ["km/h", "m/h"],
    primary: true,
  },
  {
    measure: "Pace",
    default: ["s/m", "s/ft"],
    primary: false,
  },
  {
    measure: "Pressure",
    default: ["Pa", "psi"],
    primary: false,
  },
  {
    measure: "Digital",
    default: ["b", "B"],
    primary: true,
  },
  {
    measure: "Illuminance",
    default: ["lx", "ft-cd"],
    primary: false,
  },
  {
    measure: "Parts-Per",
    default: ["ppm", "ppb"],
    primary: false,
  },
  {
    measure: "Voltage",
    default: ["m", "ft"],
    primary: false,
  },
  {
    measure: "Current",
    default: ["V", "mV"],
    primary: false,
  },
  {
    measure: "Power",
    default: ["A", "mA"],
    primary: false,
  },
  {
    measure: "Apparent Power",
    default: ["VA", "mVA"],
    primary: false,
  },
  {
    measure: "Reactive Power",
    default: ["VAR", "mVAR"],
    primary: false,
  },
  {
    measure: "Energy",
    default: ["Wh", "J"],
    primary: false,
  },
  {
    measure: "Reactive Energy",
    default: ["VARh", "mVARh"],
    primary: false,
  },
  {
    measure: "Angle",
    default: ["deg", "grad"],
    primary: true,
  },
  {
    measure: "BMI",
    extra: true,
    defaultMeasure: "Mass",
    default: ["kg", "lb"],
    primary: true,
  },
  {
    measure: "Weight Loss",
    extra: true,
    defaultMeasure: "Mass",
    default: ["kg", "lb"],
    primary: true,
  },
];

export default unitList;
