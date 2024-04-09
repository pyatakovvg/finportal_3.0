import { Service } from 'typedi';

import { UserService } from '../service/user.service';

import type { User } from '../user.entity';

@Service()
export class UserRegistrationUseCase {
  constructor(private readonly userService: UserService) {
  }

  execute(login: string, password: string): User {
    return this.userService.registration(login, password);
  }
}