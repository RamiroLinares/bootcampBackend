import { ILampInterface } from './lampinterface';
export default class Button {
    constructor(protected lamp: ILampInterface) {
    }
    onButtonListener() {
        if (this.lamp.getStatus()) {
            this.lamp.turnOff()
        } else {
            this.lamp.turnOn();
        }
    }
}