import { User, Uuid } from './user.entity';

/**
 * Подумать, оставить название repository или gateway
 */
export interface IUserRepository {
  create(user: Partial<User>): User;
  update(user: Partial<User>): User;
  getByFilter(filter: any): User[];
  getByUuid(uuid: Uuid): User | null;
  getByUuidOrFail(uuid: Uuid): User;
  getAll(): User[];
}
