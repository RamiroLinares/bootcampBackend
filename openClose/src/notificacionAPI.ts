import User from "./user";
import { Inotification } from './notificationInterface';

export default class NotificationAPI implements Inotification {

    constructor(private user: User, private message: string) {
    }

    notifyByFacebook(){
        console.log(`Notify by Facebook to ${this.user.name} message: ${this.message}...`);
    }
}