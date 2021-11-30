import { Doctor } from "../classes/Doctor.mjs";
import { HealthSystems } from "../classes/HealthSystems.mjs";

export default class LosOlivos extends HealthSystems {
adress='Main Street';
doctors=[
    new Doctor('Dr Pedro Linares','cirujia',true),
    new Doctor('Dra Camila Garcia','diabetes',false)
]
constructor(adress,doctors) {
   super(adress,doctors)
}
get getAdress() {
    return this.adress;
}
get getDoctors() {
    return this.doctors;
}

}