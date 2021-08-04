import { Model } from 'objection';

export default class User extends Model {
  id!: number;
  username!: string;
  email!: string;
  password!: string;

  static tableName = 'Users';
}
