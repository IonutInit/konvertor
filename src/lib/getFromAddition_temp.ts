// duplicate of first part of conversion function, to be used in the temporary calculator components

import convert from "convert-units";

const getFromAddition = (
  value: (string | number)[],
  from: string[],
  to: string
) => {
  let result = 0;

  for (let i = 0; i < from.length; i++) {
    result += convert(Number(value[i])).from(from[i]).to(to);
  }

  return result;
};

export default getFromAddition;
