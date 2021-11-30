import { expect } from "chai"
import { assert } from 'chai';
import { serialize } from "./serializeBigInt.mjs";
import { deserialize } from "./deserializeBigInt.mjs";

describe('Serializing and Deserializing BigInt tests', function () {
    const val=987n;
    const resVal='"987n"'
    const valJson = { testNumber: 123, testBigInt: 987n};
    const resValJson='{"testNumber":123,"testBigInt":"987n"}'
    const valObjectNested={testNumber: 123,testBigInt: 987n,
        nested: {myProp: 5n,myProp2: 10,myArray: [5n],myObject: {test: 5n}},
        myArray: [5, 50n]}
    const resvalObjectNested='{"testNumber":123,"testBigInt":"987n","nested":{"myProp":"5n","myProp2":10,"myArray":["5n"],"myObject":{"test":"5n"}},"myArray":[5,"50n"]}'
    
    it('Serialize 1 value', () => {
        expect(assert.equal(serialize(val), resVal));
    })
    it('Deserialize 1 value', () => {
        expect(assert.equal(deserialize(resVal).toString(), val.toString()));
    })  
    it('Serialize Object', () => {
        expect(assert.equal(serialize(valJson), resValJson));
    })
    it('Deserialize Object', () => {
        expect(assert.equal(deserialize(resValJson).toString(), valJson.toString())); //in ValJson
        //mocha converts 987n to to 987
        //issue in https://github.com/mochajs/mocha/issues/4090
    })
    it('Serialize Nested Object', () => {
        expect(assert.equal(serialize(valObjectNested), resvalObjectNested));
    })
    it('Deserialize Nested Object', () => {
        expect(assert.equal(deserialize(resvalObjectNested).toString(), valObjectNested.toString())); //in ValJson
    })
    
})