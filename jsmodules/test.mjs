import { expect } from "chai"
import { assert } from 'chai';
import LosOlivos from './healthSystems/LosOlivos.mjs'
import SanPedro from './healthSystems/SanPedro.mjs'

describe('testClinics', function () {
    const docRightOlivos=[ 'Dr Pedro Linares' ];
    const docRightSanPedro=[ 'Dr Roberto Sanchez' ];
    const systemOlivos= new LosOlivos();
    const systemSanPedro= new SanPedro();
    
    it('San Pedro', () => {
        expect(assert.deepEqual(systemOlivos.getAvailableDoctors(), docRightOlivos));
    })
    it('Los Olivos', () => {
        expect(assert.deepEqual(systemSanPedro.getAvailableDoctors(), docRightSanPedro));
    })

})