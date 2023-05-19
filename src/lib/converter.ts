import convert from "convert-units";

const getFrom_Addition = (value: (string | number)[], from: string[]) => {
  let result = 0;
  let toUnit = from[0];

  for (let i = 0; i < from.length; i++) {
    result += convert(Number(value[i])).from(from[i]).to(toUnit);
  }

  return result;
};

const getFrom_Subtraction = (value: (string | number)[], from: string[]) => {
  let result = Number(value[0])
  let toUnit = from[0]

  for (let i = 1; i < from.length; i++) {
    result -= convert(Number(value[i])).from(from[i]).to(toUnit);
  }

  return result
}

const getTo = (value: number, from: string, to: string[]) => {
  let result = [];
  let currentValue = value;

  for (let i = 0; i < to.length; i++) {
    let conversionFactor = convert(1).from(from).to(to[i]);
    let convertedValue = currentValue * conversionFactor;

    let wholeValue = Math.floor(convertedValue);
    result.push(wholeValue);

    currentValue = convertedValue - wholeValue;
  }

  result.push(currentValue.toFixed(1));

  const lastElement = result[result.length - 1];

  if (lastElement === "0.0") {
    result.pop();
    return result;
  } else {
    result[result.length - 2] =
      Number(result[result.length - 2]) + Number(lastElement);
    result.pop();
  }

  return result;
};

const converter = (
  isAddition: boolean,
  value: (string | number)[],
  from: string[],
  baseUnit: string,
  to: string[]
) => {
  const fromValue = isAddition ? getFrom_Addition(value, from) : getFrom_Subtraction(value, from);
  return getTo(fromValue, baseUnit, to);
};

export default converter;
