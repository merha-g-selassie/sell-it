import { Model } from 'objection';

export default class Category extends Model {
  id!: number;
  name!: string;

  static tableName = 'Categories';
}
