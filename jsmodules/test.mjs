import { expect } from "chai"
import { assert } from 'chai';
import LosOlivos from './healthSystems/LosOlivos.mjs'
import SanPedro from './healthSystems/SanPedro.mjs'
import { universityComunication } from './university.mjs'

describe('testClinics', function () {
    const docRightOlivos = ['Dr Pedro Linares'];
    const docRightSanPedro = ['Dr Roberto Sanchez'];
    const systemOlivos = new LosOlivos();
    const systemSanPedro = new SanPedro();

    it('Los Olivos', () => {
        expect(assert.deepEqual(systemOlivos.getAvailableDoctors(), docRightOlivos));
    })
    it('San Pedro', () => {
        expect(assert.deepEqual(systemSanPedro.getAvailableDoctors(), docRightSanPedro));
    })
    it('University comunication', async () => {
        const result = await universityComunication()
        const hour = new Date().getHours();
        let turn = '';
        if (hour > 8 && hour < 22) {
            turn = 'day'
        } else { turn = 'night' }
        if (turn === "day") {
            assert.deepEqual(result, docRightSanPedro)
        } else {
            assert.deepEqual(result, docRightOlivos)
        }
    })
})