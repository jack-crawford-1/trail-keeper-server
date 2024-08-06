import express from 'express';

import authMiddleware from '../middleware/authMiddleware.js';
import { signup, login } from '../controllers/auth/authController.js';

import {
  getUsers,
  getUser,
  addUser,
  updateUser,
} from '../controllers/dashboard/userController.js';

const userRouter = express.Router();

userRouter.get('/users', authMiddleware, getUsers);
userRouter.get('/user/:id', authMiddleware, getUser);

userRouter.post('/user', addUser);
userRouter.patch('/user/:id', updateUser);

userRouter.post('/signup', signup);
userRouter.post('/login', login);

export default userRouter;
