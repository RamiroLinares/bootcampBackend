import { serialize } from "./serializeBigInt.mjs";
import { deserialize } from "./deserializeBigInt.mjs";
  const myObj = {
    testNumber: 123,
    testBigInt: 987n,
    nested: {
      myProp: 5n,
      myProp2: 10,
      myArray: [5n],
      myObject: {
        test: 5n
      }
    },
    myArray: [5, 50n]
  }
  
  const val= 987n;
  const myJson = { testNumber: 123, testBigInt: 987n};
  console.log(serialize(myObj))
  console.log(deserialize(serialize(myObj)))
  