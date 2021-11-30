export const serialize = (myObj) => {
    if (typeof myObj === 'bigint') {
        myObj = myObj.toString() + 'n';  
      }
    for (const property in myObj) {
      if (typeof myObj[property] === 'bigint') {
        myObj[property] = myObj[property].toString() + 'n';
      }if (typeof myObj[property] === 'object') {
        serialize(myObj[property]);
    }
    }
    return JSON.stringify(myObj)
  }
  
  