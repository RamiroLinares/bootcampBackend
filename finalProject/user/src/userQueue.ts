import amqp= require('amqplib/callback_api')

export function consumeUserQueue(){
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
        const queue='user';
        const exchangeName= 'direct-exchange-user'
        channel.assertExchange(exchangeName, 'direct');
        channel.assertQueue(queue, {
            durable:false
        }, function(error2, q) {
            if (error2) {
              throw error2;
            }

             channel.consume(queue, function(message){
                //console.log('Received %s', message?.content.toString());
            messages=message?.content.toString();
            },
            {
                noAck: true
            }); 
        }); 
    });
});

return messages;}