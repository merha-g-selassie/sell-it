import User from '../models/User';
import { Resolver, Query, Arg, Mutation, Int } from 'type-graphql';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { log } from 'console';
@Resolver()
export class UserResolver {
  @Query(() => String)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<string> {
    const res = await User.query()
      .select('id', 'username', 'email', 'password')
      .where('email', '=', email);

    if (res) {
      const user = res[0];
      console.log(user);

      const valid = await argon2.verify(user.password, password);

      if (valid) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            id: JSON.stringify(user),
          },
          process.env.TOKEN_SECRET
        );
        return token;
      }
    }
    return '';
  }

  @Mutation(() => User)
  async signUp(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password);

    const user = {
      username,
      email,
      password: hashedPassword,
    };

    const res = await User.query().insert(user);
    console.log(res);

    return res;
  }
  @Query(() => [User])
  async users(): Promise<User[]> {
    const res = await User.query();
    return res;
  }

  @Mutation(() => User)
  async update(
    @Arg('id') id: string,
    @Arg('username') username: string,
    @Arg('email') email: string
  ): Promise<User> {
    const res = await User.query().patchAndFetchById(id, {
      username,
      email,
    });
    log(res);
    return res;
  }

  @Mutation(() => Int)
  async delete(@Arg('id') id: string): Promise<number> {
    const res = await User.query().deleteById(id);
    return res;
  }
}
