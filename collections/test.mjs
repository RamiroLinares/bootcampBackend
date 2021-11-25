/* const {hello} =require("./functions.mjs");

const { assert } = require("chai");
const { expect } = require("chai"); */
import { expect } from "chai";
import { assert } from 'chai';
import someOddNumbers from "./functions.mjs";

const gen = someOddNumbers();
describe('Test generator', function () {
    it('First gen', () => {
        expect(assert.equal(gen.next().value, 1));
    })
    it('Second gen', () => {
        expect(assert.equal(gen.next().value, 3));
    })
    it('Third gen', () => {
        expect(assert.equal(gen.next().value, 9));
    })
    it('Fourth gen', () => {
        expect(assert.equal(gen.next().value, 9));
    })
    
})