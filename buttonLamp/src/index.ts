import Button from './button';
import Lamp from './lamp';
import { ILampInterface } from './lampinterface';
console.log("a")

const lamp:ILampInterface=new Lamp();
const button=new Button(lamp)
button.onButtonListener();
