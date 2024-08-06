import express from 'express';

import { getSevenDayWeather } from '../controllers/weather/getSevenDayWeather.js';
import { getCurrentWeather } from '../controllers/weather/getCurrentWeather.js';

const weatherRouter = express.Router();

weatherRouter.get('/weatherseven', getSevenDayWeather);
weatherRouter.get('/weather', getCurrentWeather);

export default weatherRouter;
