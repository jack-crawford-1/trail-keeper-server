import { pool } from '../pool.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

class User {
  static async create({ name, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, name, email;
    `;
    const values = [name, email, hashedPassword];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default User;
