import { consumeAttendanceQueue } from './attendance';
import { createSendQueueToUser } from './user';
import { getAttendance } from './getAttendance';

const message=consumeAttendanceQueue();
//createSendQueueToUser(message);