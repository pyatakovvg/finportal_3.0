import { IUserRepository } from '../user-repository.interface';

import { User, Uuid } from "../user.entity";

export class UserRepository implements IUserRepository {
  getByUuidOrFail(uuid: Uuid): User {
    throw new Error('Not realization');
  }

  getByFilter(filter: any): User[] {
    throw new Error('Not realization');
  }

  getByUuid(uuid: Uuid): User | null {
    throw new Error('Not realization');
  }

  getAll(): User[] {
    throw new Error('Not realization');
  }

  create(user: Partial<User>): User {
    throw new Error('Not realization');
  }

  update(user: Partial<User>): User {
    throw new Error('Not realization');
  }
}