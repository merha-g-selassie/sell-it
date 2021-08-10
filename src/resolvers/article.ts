import Article from '../models/Article';
import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import Category from '../models/Category';

@Resolver()
export class ArticleResolver {
  @Query(() => [Article])
  async articles(): Promise<Article[]> {
    const res = await Article.query().withGraphFetched('category');

    return res;
  }

  @Mutation(() => Article)
  async createArticle(
    @Arg('name') name: string,
    @Arg('price') price: number,
    @Arg('categoryId') categoryId: number
  ): Promise<Article> {
    const category = await Category.query().findById(categoryId);
    const res = await Article.query().insert({
      name,
      price,
      category,
    });

    return res;
  }

  @Mutation(() => Int)
  async deleteArticle(@Arg('id') id: number): Promise<number> {
    const res = await Article.query().deleteById(id);
    return res;
  }
}
