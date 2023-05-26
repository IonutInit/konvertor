import convert from "convert-units";

export const describe = (input: string[]) => {
  return [input.map((x) => convert().describe(x).plural), input];
};

export const revertDescription = (
  unit: string,
  revertFrom: string[],
  revertTo: string[]
) => {
  const index = revertFrom.indexOf(unit);
  return revertTo[index];
};
