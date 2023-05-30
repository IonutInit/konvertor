const displaySwitchedValues = (value: number, decimals: number) => {
    if (typeof value !== "number" || isNaN(value)) {
        return value;
      }

    if (value % 1 === 0) {
        return value
      }

      return value.toFixed(decimals)    
}

export default displaySwitchedValues;