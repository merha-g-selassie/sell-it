import Category from '../models/Category';
import { Resolver, Query } from 'type-graphql';

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    const res = await Category.query().withGraphFetched('article');

    return res;
  }
}
