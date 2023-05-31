import { UnitDescription } from "../data/unitDescription";

function getNextUnit(unit: string, allUnits: UnitDescription) {
  const index = allUnits.short.indexOf(unit);
  return allUnits.short.slice(0, index);
}

export default getNextUnit;
