import User from '../models/User';
import { Resolver, Query } from 'type-graphql';
import {} from 'objection';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const res = await User.query();
    return res;
  }
}
