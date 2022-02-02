import { Repository as OrmRepository } from 'typeorm';
import { Attendance } from '../entity/Attendance';

export class AttendanceRepository  {
  private readonly repository: OrmRepository<any>;
  constructor(
    public connection:OrmRepository<any>
  ) {}

  async addAttendance(attendance: Attendance): Promise<Attendance> {
    const attendanceToSave = this.connection.create(attendance);
    const savedAttendance = await this.connection.save(attendanceToSave);
    return savedAttendance;
  }

  async deleteAttendance(id: string): Promise<any> {
    const deletedAttendance = await this.connection.delete(id);
    return deletedAttendance;
  }
  public async findAll(): Promise<Attendance[]> {
    return await this.connection.find();
  }

  public async findOne(id: string): Promise<Attendance> {
    return await this.connection.findOne(id);
  }
}