const axios = require("axios");

async function putUser(id:any, attendanceAmount:any) {
  const res = await axios.put('http://localhost:3000/users/'+id, {
/*     firstName: "pepe",
    lastName: "pepe",
    age: 25,
    nickName: "pepito",
    email: "pepe@hotmail.com", */
    assistance: attendanceAmount
}).then(function (response:any){
  //console.log(response)
});
 }

export async function getAttendance(id:any){
var http = require('http');
let attendanceAmount;
    var request =http.request({
      host: 'localhost',
      port: 3001,
      path: '/attendances/users/'+id,
      method: 'GET',
      headers: {
      }
    },function(response:any) {
      var data = '';
      response.setEncoding('utf8');
      response.on('data', (chunk:any) => {
        data += chunk;
      });
       response.on('end', () => {
        attendanceAmount= JSON.parse(data).length;
        console.log(attendanceAmount)
        putUser(id,attendanceAmount)
      });
    }
    );
    request.end();
  return attendanceAmount;};
