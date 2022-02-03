import {Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn, ObjectID} from "typeorm";

@Entity()
export class Attendance {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    hourStart: string;

    @Column()
    hourEnd: string;

    @Column()
    date: Date;

    @Column()
    note: string;

    @Column("uuid")
    userID:string;
}
