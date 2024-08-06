import express from 'express';

import {
  getTrails,
  getTrail,
  addTrail,
  updateTrail,
} from '../controllers/dashboard/trailController.js';

import {
  getMessage,
  getMessages,
  addMessage,
  updateMessage,
} from '../controllers/dashboard/messageController.js';

import {
  getVolunteer,
  getVolunteers,
  addVolunteer,
  updateVolunteer,
} from '../controllers/dashboard/volunteerController.js';

import {
  getTrailReport,
  getTrailReports,
  addTrailReport,
  updateTrailReport,
} from '../controllers/dashboard/trailReportsController.js';

import {
  getTrainingModule,
  getTrainingModules,
  addTrainingModule,
  updateTrainingModule,
} from '../controllers/dashboard/trainingModuleController.js';

import {
  getForumPost,
  getForumPosts,
  addForumPost,
  updateForumPost,
} from '../controllers/dashboard/forumPostController.js';

const moduleRouter = express.Router();

moduleRouter.get('/trails', getTrails);
moduleRouter.get('/messages', getMessages);
moduleRouter.get('/volunteers', getVolunteers);
moduleRouter.get('/trail-reports', getTrailReports);
moduleRouter.get('/training-modules', getTrainingModules);
moduleRouter.get('/forum-posts', getForumPosts);

moduleRouter.get('/trail/:id', getTrail);
moduleRouter.get('/message/:id', getMessage);
moduleRouter.get('/volunteer/:id', getVolunteer);
moduleRouter.get('/trail-report/:id', getTrailReport);
moduleRouter.get('/training-module/:id', getTrainingModule);
moduleRouter.get('/forum-post/:id', getForumPost);

moduleRouter.post('/trail', addTrail);
moduleRouter.post('/message', addMessage);
moduleRouter.post('/volunteer', addVolunteer);
moduleRouter.post('/trail-report', addTrailReport);
moduleRouter.post('/training-module', addTrainingModule);
moduleRouter.post('/forum-post', addForumPost);

moduleRouter.patch('/trail/:id', updateTrail);
moduleRouter.patch('/message/:id', updateMessage);
moduleRouter.patch('/trail-report/:id', updateTrailReport);
moduleRouter.patch('/training-module/:id', updateTrainingModule);
moduleRouter.patch('/volunteer/:id', updateVolunteer);
moduleRouter.patch('/forum-post/:id', updateForumPost);

export default moduleRouter;
