import { Model } from 'objection';
import { Field, Int, ObjectType } from 'type-graphql';
@ObjectType()
export default class User extends Model {
  @Field(() => Int)
  id!: number;
  @Field()
  username!: string;
  @Field()
  email!: string;
  @Field()
  password!: string;

  static tableName = 'Users';
}
