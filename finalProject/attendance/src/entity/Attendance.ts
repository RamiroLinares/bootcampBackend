import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Attendance {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    hourStart: number;

    @Column()
    hourEnd: number;

    @Column()
    date: Date;

    @Column()
    note: string;
    
}
