import { User } from './../entity/user';
import { Repository } from './generic.repository';
import { Repository as OrmRepository } from 'typeorm';

export class UserRepository  {
  private readonly repository: OrmRepository<any>;
  constructor(
    public connection:OrmRepository<any>
  ) {}

  async addUser(user: User): Promise<User> {
    const userToSave = this.connection.create(user);
    const savedUser = await this.connection.save(userToSave);
    return savedUser;
  }

  async deleteUser(id: string): Promise<any> {
    const deletedUser = await this.connection.delete(id);
    return deletedUser;
  }
  public async findAll(): Promise<User[]> {
    return await this.connection.find();
  }

  public async findOne(id: string): Promise<User> {
    return await this.connection.findOne(id);
  }
}
