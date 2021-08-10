import express, { Request, Response } from 'express';
import Category from '../models/Category';
// import Article from '../models/Article';
// import User from '../models/User';

const router = express.Router();

router.get('/api/users', async (_: Request, res: Response) => {
  try {
    // const result = await User.query();
    const result = await Category.query().withGraphFetched('article');
    // const result = await Article.query().withGraphFetched({
    //   category: true,
    // });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('error');
  }
});

export { router as usersRouter };
