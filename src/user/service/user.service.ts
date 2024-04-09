import { Service, Inject } from 'typedi';

import { UserRepository } from '../repository/user.repository';

import type { User } from '../user.entity';

@Service()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  registration(login: string, password: string): User {
    return this.userRepository.create(login, password);
  }
}
