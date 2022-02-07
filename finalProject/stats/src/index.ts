import { consumeAttendanceQueue } from './attendance';
import { createSendQueueToUser } from './user';

const message=consumeAttendanceQueue();
//createSendQueueToUser(message);