export const deserialize = (myJson) => {
    const myBigInt = JSON.parse(myJson, (key, value) => {
      if (typeof value === "string" && /^\d+n$/.test(value)) {
        return BigInt(value.substr(0, value.length - 1))
      }
      return value;
    })
    return myBigInt
  
  }