import { Doctor } from "../classes/Doctor.mjs";
import { HealthSystems } from "../classes/HealthSystems.mjs";

export default class SanPedro extends HealthSystems {
    adress = 'Secondary Street';
    doctors = [
        new Doctor('Dra Daniela Sanchez', 'radiografia', false),
        new Doctor('Dr Roberto Sanchez', 'ecografia', true)
    ]
    constructor(adress, doctors) {
        super(adress, doctors)
    }

    get getAdress() {
        return this.adress;
    }
    get getDoctors() {
        return this.doctors;
    }

 }
 