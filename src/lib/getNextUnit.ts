function getNextUnit(unit: string, allUnits: string[]) {
  const index = allUnits.indexOf(unit);
  return allUnits.slice(0, index);
}

export default getNextUnit;
