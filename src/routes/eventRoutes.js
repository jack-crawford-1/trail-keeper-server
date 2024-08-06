import express from 'express';
import {
  getEvents,
  getEvent,
  addEvent,
  updateEvent,
} from '../controllers/dashboard/eventController.js';

import {
  getComments,
  addComment,
  getComment,
  updateComment,
} from '../controllers/dashboard/commentController.js';

const eventRouter = express.Router();

eventRouter.get('/events', getEvents);
eventRouter.get('/event/:id', getEvent);
eventRouter.post('/event', addEvent);
eventRouter.patch('/event/:id', updateEvent);

eventRouter.get('/comments', getComments);
eventRouter.post('/comments', addComment);
eventRouter.get('/comments/:id', getComment);
eventRouter.patch('/comments/:id', updateComment);

export default eventRouter;
