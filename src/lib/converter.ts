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
  let result = Number(value[0]);
  let toUnit = from[0];

  for (let i = 1; i < from.length; i++) {
    result -= convert(Number(value[i])).from(from[i]).to(toUnit);
  }

  return result;
};

const getTo = (value: number, from: string, to: string[]) => {
  const result = Array(to.length)

  const initialConversion = (convert(value).from(from).to(to[0]))
  result[0] = initialConversion

if(to.length > 1) {
  result[0] = Math.floor(initialConversion)
  let residual = initialConversion - result[0]
   
  for(let i = 1; i < to.length; i++) {
    const upperLimit = i  > to.length ? to.length : i 

    const conversion =   convert(residual).from(to[i - 1 ]).to(to[upperLimit]) 

    if(i === to.length - 1) {
      result[i] = conversion
    } else {
      result[i] = Math.floor(conversion)
    }

    residual = conversion - result[i]
  }
}

return result
};

const converter = (
  isAddition: boolean,
  value: (string | number)[],
  from: string[],
  baseUnit: string,
  to: string[]
) => {
  const fromValue = isAddition
    ? getFrom_Addition(value, from)
    : getFrom_Subtraction(value, from);
  return getTo(fromValue, baseUnit, to);
};

export default converter;
