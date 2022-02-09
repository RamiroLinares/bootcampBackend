import { createSendQueueToUser } from './user';
import { getAttendance } from './getAttendance';
import amqp= require('amqplib/callback_api')

export function consumeAttendanceQueue(){
let messages:any;
amqp.connect({
    protocol:'amqp',
    hostname:'noteRamy',
    password:'admin',
    username:'admin',
    port: 5672
}, function(error,connection){
    if(error){
        throw error;
    }
    connection.createChannel(function(error1,channel){
        if(error1){
            throw error1;
        }
        const queue='attendance';
        const exchangeName= 'direct-exchange-attendance'
        channel.assertExchange(exchangeName, 'direct');
        channel.assertQueue(queue, {
            durable:false
        }, function(error2, q) {
            if (error2) {
              throw error2;
            }

             channel.consume(queue, function(message){
                messages=message?.content.toString();       
                

                const messagesParse=JSON.parse(messages);
                const userID=messagesParse.userID
                console.log('Received %s', userID );
                const attendanceAmount=getAttendance(userID).then(()=>{
                    const messageToSend="userID:"+userID+" attendanceAmount:"+attendanceAmount;
                    createSendQueueToUser(String(messageToSend));
                })
                
            },
            {
                noAck: true
            }); 
        }); 
    });
});

return messages;}