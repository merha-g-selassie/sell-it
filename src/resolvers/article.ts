import Article from '../models/Article';
import { Resolver, Query } from 'type-graphql';

@Resolver()
export class ArticleResolver {
  @Query(() => [Article])
  async articles(): Promise<Article[]> {
    const res = await Article.query().withGraphFetched('category');

    return res;
  }
}
