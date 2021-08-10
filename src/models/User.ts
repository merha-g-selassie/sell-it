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
  // @Field()
  password!: string;
  @Field(() => Date, { nullable: true })
  created_at: Date;
  @Field(() => Date, { nullable: true })
  updated_at: Date;

  static tableName = 'Users';
}
