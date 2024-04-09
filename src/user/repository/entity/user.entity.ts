import {User, Uuid} from '../../user.entity';


export class UserEntity implements User {
  uuid: Uuid = '';
  firstName: string = '';
  lastName: string = '';
  roles: string[] = [];
  permissions: string[] = [];
}