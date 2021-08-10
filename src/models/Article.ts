import { Model, RelationMappings } from 'objection';
import { Field, Int, ObjectType } from 'type-graphql';
import Category from './Category';

@ObjectType()
export default class Article extends Model {
  @Field(() => Int)
  id!: number;
  @Field()
  name!: string;
  @Field(() => Int)
  price!: number;
  @Field(() => Category, { nullable: true })
  category?: Category;
  @Field(() => Date)
  created_at: Date;
  @Field(() => Date)
  updated_at: Date;

  static tableName = 'Articles';

  static relationMappings = (): RelationMappings => ({
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: Category,
      join: {
        from: 'Articles.category_id',
        to: 'Categories.id',
      },
    },
  });
}
