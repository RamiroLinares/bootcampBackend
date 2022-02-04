import "reflect-metadata";
import {createConnection} from "typeorm";
import {Attendance} from "./entity/Attendance";
import * as express from "express";
import {Request, Response} from "express";
import { AttendanceRepository } from "./repository/attendance.repository";
import { createSendQueue } from './rabbit/message';

createConnection().then(async connection => {
    const port = 3001
    const app = express();
    app.use(express.json());
    const attendanceRepository= new AttendanceRepository(connection.getRepository(Attendance));
    app.get("/attendances", async function(req: Request, res: Response) {
        const attendances = await attendanceRepository.findAll()
        res.send(attendances)
    });

    app.get("/attendances/:id", async function(req: Request, res: Response) {
        const results = await attendanceRepository.findOne(req.params.id);
        return res.send(results);
    });
    app.get("/attendances/users/:userID", async function(req: Request, res: Response) {
        const results = await connection.getRepository(Attendance)
        .find({ 
            where: { 
               userID: {$eq: req.params.userID}, 
            } 
         });

        return res.send(results);
    
    });

    app.post("/attendances", async function(req: Request, res: Response) {
        const results = await attendanceRepository.addAttendance(req.body);
        console.log(String(results))
        createSendQueue(String(results));
        return res.send(results);
    });

    app.put("/attendances/:id", async function(req: Request, res: Response) {
        const Attendance = await attendanceRepository.findOne(req.params.id);
        attendanceRepository.connection.merge(Attendance, req.body);
        const results = await attendanceRepository.addAttendance(Attendance);
        return res.send(results);
    });

    app.delete("/attendances/:id", async function(req: Request, res: Response) {
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