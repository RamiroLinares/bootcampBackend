import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as express from "express";
import {Request, Response} from "express";
import { UserRepository } from './repository/user.repository';
import { v4 as uuidv4 } from 'uuid';

createConnection().then(connection => {
    const userRepository = connection.getRepository(User);
    const port = 3000
    const app = express();
    app.use(express.json());

    app.get("/users", async function(req: Request, res: Response) {
        let users:any;
        users = await userRepository.find();
        if(req.params.name!==null){
            users = await userRepository.find().then(users=>{
                users.filter(user=> user.firstName===req.params.name)
            });
        }else if(req.params.nickname!==null){
            users = await userRepository.find().then(users=>{
                users.filter(user=> user.nickName===req.params.nickname)
            });
        }
        res.json(users);
    });

    app.get("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/users", async function(req: Request, res: Response) {
        const results = await userRepository.save(req.body);
        return res.send(results);
    });

    app.put("/users/:id", async function(req: Request, res: Response) {
        const user = await userRepository.findOne(req.params.id);
        userRepository.merge(user, req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.delete(req.params.id);
        if (results.affected===0){
            return res.status(404).send("User to delete not found")
        }else{
        return res.status(200).send("User "+req.params.id+ " deleted successfully");}
    });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
});