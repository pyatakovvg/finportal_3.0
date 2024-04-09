import 'reflect-metadata';

import { Container } from 'typedi';

import { UserController } from './user/controller/user.controller';

const userController = Container.get(UserController);

const newUser = userController.registration({
  body: {
    login: '123',
    password: '234',
  }
});

console.log(newUser);
