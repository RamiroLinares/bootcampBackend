import "reflect-metadata";
import {createConnection} from "typeorm";
import {Attendance} from "./entity/Attendance";
import * as express from "express";
import {Request, Response} from "express";
import { AttendanceRepository } from "./repository/attendance.repository";

createConnection().then(async connection => {
    const port = 3001
    const app = express();
    app.use(express.json());
    const attendanceRepository= new AttendanceRepository(connection.getRepository(Attendance));
    app.get("/Attendances", async function(req: Request, res: Response) {
        const filters = req.query;
        const Attendances = await attendanceRepository.findAll()
        const filteredAttendances = Attendances.filter(Attendance => {
          let isValid = true;
          for (const key in filters) {
            isValid = isValid && Attendance[key] == filters[key];
          }
          return isValid;
        });
        if(!!filteredAttendances){
            res.status(404).send("Filtered Attendance or Attendances Not Found")
        }else{
            res.send(filteredAttendances);
        }
        
    });

    app.get("/Attendances/:id", async function(req: Request, res: Response) {
        const results = await attendanceRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/Attendances", async function(req: Request, res: Response) {
        const results = await attendanceRepository.addAttendance(req.body);
        return res.send(results);
    });

    app.put("/Attendances/:id", async function(req: Request, res: Response) {
        const Attendance = await attendanceRepository.findOne(req.params.id);
        attendanceRepository.connection.merge(Attendance, req.body);
        const results = await attendanceRepository.addAttendance(Attendance);
        return res.send(results);
    });

    app.delete("/Attendances/:id", async function(req: Request, res: Response) {
        const results = await attendanceRepository.deleteAttendance(req.params.id);
        if (results.affected===0){
            return res.status(404).send("Attendance to delete not found")
        }else{
        return res.status(200).send("Attendance "+req.params.id+ " deleted successfully");}
    });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
});