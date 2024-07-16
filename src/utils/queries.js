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
  ('Bob', 'bbb@gmail.com', 'password123'),
  ('Charlie', 'ccc@gmail.com', 'password123');
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
  short_description TEXT,
  description TEXT,
  date DATE,
  location VARCHAR
);
`

export const insertEvents = `
INSERT INTO events(user_id, title, short_description, description, date, location)
VALUES 
  (1, 'Trail Cleanup', 'Cleaning the main trail', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat lacus et nibh aliquam euismod. Nunc ullamcorper nisl arcu, a venenatis velit lacinia ac. Etiam dignissim augue vitae facilisis faucibus. Ut posuere odio non vulputate bibendum. Integer ipsum metus, gravida in ultricies et, maximus vel arcu. Duis efficitur ultrices dolor, sed fringilla dolor venenatis eget. Maecenas tempor, diam non commodo pellentesque, nisl leo volutpat velit, ac volutpat erat sapien vel enim. Nam mollis ullamcorper metus a mattis. Integer blandit fringilla accumsan. Praesent luctus dapibus lacinia. Quisque non justo non dolor bibendum placerat. Phasellus ac nisi justo. Integer quis consectetur risus. Mauris scelerisque, massa non efficitur faucibus, nulla elit tempor orci, ut bibendum nisi nibh et nunc. Etiam eget massa nec urna mollis elementum. Sed euismod eros urna, eget finibus diam feugiat at. Maecenas eu urna enim. Etiam lacinia nunc sit amet fermentum tristique. Suspendisse tincidunt egestas bibendum.', '2024-08-15', 'Holdsworth Road End'),
  (2, 'Volunteer Meetup', 'Meeting for volunteers', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet tortor quis nisi finibus feugiat. Fusce sit amet tortor non mi venenatis tincidunt. Vivamus aliquet enim sit amet urna laoreet, quis feugiat purus iaculis. Aenean et sem ut orci euismod vehicula. Morbi sed turpis nec turpis laoreet fermentum sit amet et leo. Etiam lacinia nunc non venenatis scelerisque.', '2024-09-01', 'TTC Community Center'),
  (1, 'Nature Walk', 'Guided walk through the forest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sapien a est aliquet cursus. Ut fringilla sem nec bibendum tincidunt. Donec vehicula dui ac magna condimentum, id cursus metus gravida. Pellentesque a dictum libero, ut tincidunt erat. Suspendisse potenti. Aliquam erat volutpat. Nulla facilisi. Mauris cursus nunc a mi congue, et elementum nunc egestas. Donec quis sapien ac orci viverra vulputate.', '2024-07-20', 'Mt Holdsworth Trail'),
  (2, 'Bird Watching', 'Spotting and identifying local birds', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim mauris ac velit pretium, sed suscipit odio facilisis. Nam sagittis quam id magna commodo, a pretium augue ultricies. Vivamus vehicula nulla vitae orci ullamcorper, nec sollicitudin ex ullamcorper. Quisque et magna auctor, consequat urna et, feugiat est. Integer vehicula libero id urna feugiat, et laoreet arcu porttitor. Phasellus convallis ante sit amet nibh scelerisque, ut auctor nisl gravida. Fusce tempor, nulla in sodales placerat, ex metus luctus turpis, vel finibus augue lectus sit amet nulla.', '2024-08-05', 'Zealandia Bird Sanctuary'),
  (1, 'Night Hike', 'Exploring trails at night', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper orci at ex vehicula, sit amet bibendum turpis malesuada. Nullam venenatis nisi nec malesuada varius. Suspendisse potenti. Nulla volutpat ligula in metus bibendum, id pretium tortor viverra. Quisque efficitur turpis non vestibulum blandit. Proin dapibus tellus ut vestibulum feugiat.', '2024-07-25', 'Orongorongo Valley'),
  (1, 'Plant Identification', 'Learn about local flora', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada libero sit amet mauris ultrices, nec tempus metus malesuada. In non turpis et magna faucibus facilisis. Pellentesque id arcu sit amet sapien tincidunt ultricies. Nullam scelerisque lacus a erat pharetra, ac accumsan odio hendrerit. Suspendisse potenti. Proin eu magna tincidunt, sodales elit nec, dictum metus.', '2024-08-22', 'Botanical Gardens');
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
