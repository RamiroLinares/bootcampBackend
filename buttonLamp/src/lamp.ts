import { ILampInterface } from './lampinterface';
export default class Lamp implements ILampInterface {
    private status:boolean;
    constructor() {
    }
    turnOn() {
        this.status = true;
        console.log('Lamp is ON');
    }

    turnOff() {
        this.status = false;
        console.log('Lamp is OFF');
    }
      getStatus(): boolean {
      return this.status;
    }
}