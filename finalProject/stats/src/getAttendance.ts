
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
      });
    }
    );
    request.end();
  return attendanceAmount;};
