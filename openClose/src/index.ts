import User from "./user";
import NotificationCenter from './notificationCenter';
import NotificationAPI from './notificacionAPI';

const user = new User('Bob');
const notificationCenter = new NotificationCenter(user, 'testMessage');

notificationCenter.notifyByEmail();

const notificationAPI= new NotificationAPI(user, 'testMessageApi')
notificationAPI.notifyByFacebook();