import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import router from '../src/routes/index.js';
import mapRouter from './routes/mapRoutes.js';
import dotenv from 'dotenv';
import eventRouter from './routes/eventRoutes.js';
import userRouter from './routes/userRoutes.js';
import moduleRouter from './routes/moduleRoutes.js';
import weatherRouter from './routes/weatherRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', router);
app.use('/v1', mapRouter);
app.use('/v1', eventRouter);
app.use('/v1', userRouter);
app.use('/v1', moduleRouter);
app.use('/v1', weatherRouter);

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
});

export default app;
