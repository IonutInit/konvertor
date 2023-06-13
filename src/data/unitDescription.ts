//@ts-nocheck

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

  // console.log(result)

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
  "W",
  "V",
  "mA",
  "VA",
  "VAR",
  "Wh",
  "VARh",
  "deg",
]);

export default description;
