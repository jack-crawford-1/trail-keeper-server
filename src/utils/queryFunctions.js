import { pool } from '../models/pool.js'
import {
  createUsersTable,
  insertUsers,
  dropUsersTable,
  createMessagesTable,
  insertMessages,
  dropMessagesTable,
  createVolunteersTable,
  insertVolunteers,
  dropVolunteersTable,
  createEventsTable,
  insertEvents,
  dropEventsTable,
  createTrailReportsTable,
  insertTrailReports,
  dropTrailReportsTable,
  createTrailsTable,
  insertTrails,
  dropTrailsTable,
  createTrainingModulesTable,
  insertTrainingModules,
  dropTrainingModulesTable,
  createForumPostsTable,
  insertForumPosts,
  dropForumPostsTable,
} from './queries.js'

export const executeQueryArray = async (arr) => {
  const stop = arr.length
  for (let index = 0; index < stop; index++) {
    await pool.query(arr[index])
  }
}

export const dropTables = () =>
  executeQueryArray([
    dropTrailReportsTable,
    dropMessagesTable,
    dropVolunteersTable,
    dropEventsTable,
    dropForumPostsTable,
    dropTrainingModulesTable,
    dropUsersTable,
    dropTrailsTable,
  ])

export const createTables = () =>
  executeQueryArray([
    createUsersTable,
    createTrailsTable,
    createMessagesTable,
    createVolunteersTable,
    createEventsTable,
    createTrailReportsTable,
    createTrainingModulesTable,
    createForumPostsTable,
  ])

export const insertIntoTables = () =>
  executeQueryArray([
    insertUsers,
    insertTrails,
    insertMessages,
    insertVolunteers,
    insertEvents,
    insertTrailReports,
    insertTrainingModules,
    insertForumPosts,
  ])
