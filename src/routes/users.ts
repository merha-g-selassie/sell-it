import express, { Request, Response } from 'express';
import User from '../models/User';

const router = express.Router();

router.get('/api/users', async (_: Request, res: Response) => {
  try {
    const result = await User.query();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('error');
  }
});

export { router as usersRouter };
