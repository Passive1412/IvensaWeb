import { stringToArray } from '@ag-grid-community/all-modules';
import { Role } from './role';

export class Account {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public role: Role,
    public accessToken?: string,
    public refreshToken?: string
  ) {}
}

