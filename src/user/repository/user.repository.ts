import { Service } from 'typedi';

import { User, Uuid } from "../user.entity";
import { UserEntity } from './entity/user.entity';

@Service()
export class UserRepository {
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

  create(login: string, password: string): User {
    const newUser = new UserEntity();

    newUser.uuid = 'uuid';
    newUser.firstName = 'New user name';
    newUser.lastName = 'New user lastName';
    newUser.roles = ['ADMIN'];

    return newUser;
  }

  update(user: Partial<User>): User {
    throw new Error('Not realization');
  }
}