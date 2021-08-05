import { Model, RelationMappings } from 'objection';
import Category from './Category';

export default class Article extends Model {
  id!: number;
  name!: string;
  price!: number;
  category?: Category;

  static tableName = 'Articles';

  static relationMappings = (): RelationMappings => ({
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Category,
      join: {
        from: 'articles.category_id',
        to: 'category.id',
      },
    },
  });
}
