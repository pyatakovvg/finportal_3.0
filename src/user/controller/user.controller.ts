import { Service } from 'typedi';

import { User } from '../user.entity';
import { UserRegistrationUseCase  } from "../usecase/user-registration.usecase";

@Service()
export class UserController {
  constructor(private readonly userRegistrationUseCase: UserRegistrationUseCase) {
  }

  registration(req: any): User {
    const body = req.body;

    return this.userRegistrationUseCase.execute(body.login, body.password);
  }
}