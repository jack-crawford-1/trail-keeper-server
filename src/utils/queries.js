export const createUsersTable = `
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR
  )
  `

export const insertUsers = `
INSERT INTO users(name, email)
VALUES ('Alice', 'aaa@gmail.com'),
      ('Bob', 'bbb@gmail.com')
`

export const dropUsersTable = 'DROP TABLE users'
