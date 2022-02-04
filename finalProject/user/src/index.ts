import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as express from "express";
import {Request, Response} from "express";
import { UserRepository } from './repository/user.repository';
import { Repository } from "./repository/generic.repository";

var http = require('http');
createConnection().then(connection => {
    const port = 3000
    const app = express();
    app.use(express.json());
    const userRepository= new UserRepository(connection.getRepository(User));
    app.get("/users", async function(req: Request, res: Response) {
        /* const filters = req.query;
        const users = await userRepository.findAll()
        const filteredUsers = users.filter(user => {
          let isValid = true;
          for (const key in filters) {
            isValid = isValid && user[key] == filters[key];
          }
          return isValid;
        }); */
        if(!!req.query){
            const users = await userRepository.findAll()
            res.send(users); 
        }else{
        const filteredUsers= await connection.getRepository(User)
        .createQueryBuilder("user")
        .where("nickName like :nickName or firstName like :firstName",
        {
            firstName: req.query.firstName,
            nickName: req.query.nickName
        }
        ).getMany()
        if(filteredUsers.length>0){
            res.send(filteredUsers);      
        }else{
            res.status(404).send("Filtered user or users Not Found")
        }
    }
    });

    app.get("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.findOne(req.params.id);

        return res.send(results);
    });

    app.post("/users", async function(req: Request, res: Response) {
        const results = await userRepository.addUser(req.body);
        return res.send(results);
    });

    app.put("/users/:id", async function(req: Request, res: Response) {
        const user = await userRepository.findOne(req.params.id);
        userRepository.connection.merge(user, req.body);
        const results = await userRepository.addUser(user);
        return res.send(results);
    });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.deleteUser(req.params.id);
        if (results.affected===0){
            return res.status(404).send("User to delete not found")
        }else{
        return res.status(200).send("User "+req.params.id+ " deleted successfully");}
    });

    app.get('/users/attendances/:id', function(req, res) {
        var request = http.request({
          host: 'localhost',
          port: 3001,
          path: '/attendances/users/'+req.params.id,
          method: 'GET',
          headers: {
          }
        }, function(response) {
          var data = '';
          response.setEncoding('utf8');
          response.on('data', (chunk) => {
            data += chunk;
          });
          response.on('end', () => {
            res.end(data);
          });
        }
        );
        request.end();
      });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
});