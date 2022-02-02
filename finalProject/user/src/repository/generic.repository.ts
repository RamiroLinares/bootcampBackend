import { injectable, unmanaged } from 'inversify';
import { Repository as OrmRepository } from 'typeorm';
import { IRepository } from './Irepository'


export abstract class Repository<T> implements IRepository<T>
{
  private readonly repository: OrmRepository<T>;

  public constructor(repository: OrmRepository<T>) {
    this.repository = repository;
  }

  public async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  public async findOne(id: string): Promise<T> {
    return await this.repository.findOne(id);
  }

  public async delete(id: string): Promise<any> {
    const result = await this.repository.delete(id);
    return result;
  }

  public async save(data: any) {
    const result = await this.repository.save(data);
    return result;
  }
  public getRepository(): OrmRepository<T> {
    return this.repository;
  }
}
