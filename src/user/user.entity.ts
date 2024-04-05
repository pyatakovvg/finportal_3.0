
export type Uuid = string;

export interface User {
  uuid: Uuid;
  firstName: string;
  lastName: string;
  roles: string[];
  permissions: string[];
}
