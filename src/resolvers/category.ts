import Category from '../models/Category';
import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    // TODO return articles with categories
    const res = await Category.query().withGraphFetched('article');

    return res;
  }

  @Mutation(() => Category)
  async createCategory(@Arg('name') name: string): Promise<Category> {
    const res = await Category.query().insert({ name });
    return res;
  }

  @Mutation(() => Category)
  async updateCategory(
    @Arg('id') id: string,
    @Arg('name') name: string
  ): Promise<Category> {
    const res = await Category.query().patchAndFetchById(id, { name });
    return res;
  }

  @Mutation(() => Int)
  async deleteCategory(@Arg('id') id: string): Promise<number> {
    const res = await Category.query().deleteById(id);
    return res;
  }
}
