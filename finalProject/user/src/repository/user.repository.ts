import { injectable } from 'inversify';
import { EntityRepository, getRepository } from 'typeorm';
import { User } from './../entity/user';
import { IRepository } from './generic.repository';

@injectable()
export class UserRepository extends IRepository<User> {
  constructor() {
    super(getRepository(User));
  }

  async addUser(user: User): Promise<User> {
    const userToSave = this.getRepository().create(user);
    const savedUser = await this.save(userToSave);
    return savedUser;
  }

  async deleteUser(id: string): Promise<any> {
    const deletedUser = await this.getRepository().delete(id);
    return deletedUser;
  }
  public async findAll(): Promise<User[]> {
    return await this.getRepository().find();
  }

  public async findOne(id: string): Promise<User> {
    return await this.getRepository().findOne(id);
  }
}
