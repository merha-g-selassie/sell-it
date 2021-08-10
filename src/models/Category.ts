import { Model, RelationMappings } from 'objection';
import { Field, Int, ObjectType } from 'type-graphql';
import Article from './Article';

@ObjectType()
export default class Category extends Model {
  @Field(() => Int)
  id!: number;
  @Field()
  name!: string;
  @Field(() => Date)
  created_at: Date;
  @Field(() => Date)
  updated_at: Date;
  @Field(() => [Article], { nullable: true })
  articles?: Article[];

  static tableName = 'Categories';

  static relationMappings = (): RelationMappings => ({
    article: {
      relation: Model.HasManyRelation,
      modelClass: Article,
      join: {
        from: 'Categories.id',
        to: 'Articles.category_id',
      },
    },
  });
}
