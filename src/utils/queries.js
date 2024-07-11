// Users Table
export const createUsersTable = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR
);
`

export const insertUsers = `
INSERT INTO users(name, email, password)
VALUES 
  ('Alice', 'aaa@gmail.com', 'password123'),
  ('Bob', 'bbb@gmail.com', 'password123');
`

export const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE;'

// Messages Table
export const createMessagesTable = `
DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  message VARCHAR,
  created_at TIMESTAMP
);
`

export const insertMessages = `
INSERT INTO messages(user_id, message, created_at)
VALUES 
  (1, 'Hello from Alice', NOW()),
  (2, 'Hello from Bob', NOW());
`

export const dropMessagesTable = 'DROP TABLE IF EXISTS messages CASCADE;'

// Volunteers Table
export const createVolunteersTable = `
DROP TABLE IF EXISTS volunteers CASCADE;
CREATE TABLE IF NOT EXISTS volunteers (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  skills VARCHAR,
  availability VARCHAR
);
`

export const insertVolunteers = `
INSERT INTO volunteers(user_id, skills, availability)
VALUES 
  (1, 'First Aid', 'Weekends'),
  (2, 'Trail Maintenance', 'Weekdays');
`

export const dropVolunteersTable = 'DROP TABLE IF EXISTS volunteers CASCADE;'

// Events Table
export const createEventsTable = `
DROP TABLE IF EXISTS events CASCADE;
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR,
  description TEXT,
  date DATE,
  location VARCHAR
);
`

export const insertEvents = `
INSERT INTO events(user_id, title, description, date, location)
VALUES 
  (1, 'Trail Cleanup', 'Cleaning the main trail', '2024-08-15', 'Main Trail'),
  (2, 'Volunteer Meetup', 'Meeting for volunteers', '2024-09-01', 'Community Center');
`

export const dropEventsTable = 'DROP TABLE IF EXISTS events CASCADE;'

// Trail Reports Table
export const createTrailReportsTable = `
DROP TABLE IF EXISTS trail_reports CASCADE;
CREATE TABLE IF NOT EXISTS trail_reports (
  id SERIAL PRIMARY KEY,
  trail_id INTEGER REFERENCES trails(id),
  condition VARCHAR,
  report_date DATE,
  reporter INTEGER REFERENCES users(id)
);
`

export const insertTrailReports = `
INSERT INTO trail_reports(trail_id, condition, report_date, reporter)
VALUES 
  (1, 'Good', '2024-07-09', 1),
  (2, 'Needs Maintenance', '2024-07-10', 2);
`

export const dropTrailReportsTable =
  'DROP TABLE IF EXISTS trail_reports CASCADE;'

// Trails Table
export const createTrailsTable = `
DROP TABLE IF EXISTS trails CASCADE;
CREATE TABLE IF NOT EXISTS trails (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR
);
`

export const insertTrails = `
INSERT INTO trails(name, location)
VALUES 
  ('Main Trail', 'Mountain Base'),
  ('River Trail', 'River Side');
`

export const dropTrailsTable = 'DROP TABLE IF EXISTS trails CASCADE;'

// Training Modules Table
export const createTrainingModulesTable = `
DROP TABLE IF EXISTS training_modules CASCADE;
CREATE TABLE IF NOT EXISTS training_modules (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR,
  content TEXT
);
`

export const insertTrainingModules = `
INSERT INTO training_modules(user_id, title, content)
VALUES 
  (1, 'First Aid Training', 'Content of First Aid Training'),
  (2, 'Trail Maintenance Training', 'Content of Trail Maintenance Training');
`

export const dropTrainingModulesTable =
  'DROP TABLE IF EXISTS training_modules CASCADE;'

// Forum Posts Table
export const createForumPostsTable = `
DROP TABLE IF EXISTS forum_posts CASCADE;
CREATE TABLE IF NOT EXISTS forum_posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  content TEXT,
  created_at TIMESTAMP
);
`

export const insertForumPosts = `
INSERT INTO forum_posts(user_id, content, created_at)
VALUES 
  (1, 'This is a post by Alice', NOW()),
  (2, 'This is a post by Bob', NOW());
`

export const dropForumPostsTable = 'DROP TABLE IF EXISTS forum_posts CASCADE;'
