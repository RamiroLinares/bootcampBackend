export interface Repository<T> {
    findAll(): Promise<T[]>;
    save(data: T): Promise<boolean>;
    delete(id: string): Promise<any>;
  }
  