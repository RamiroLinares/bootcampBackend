import User from "./user";
import { Inotification } from './notificationInterface';

export default class NotificationCenter implements Inotification {

    constructor(private user: User, private message: string) {
    }

    notifyByEmail(){
        console.log(`Notify by email to ${this.user.name} message: ${this.message}...`);
    }

    notifyBySms(){
        console.log(`Notify by SMS to ${this.user.name} message: ${this.message}...`);
    }

}