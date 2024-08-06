import { pool } from '../pool.js';

class Event {
  static async create({
    user_id,
    title,
    short_description,
    description,
    date,
    location,
  }) {
    const query = `
      INSERT INTO events (user_id, title, short_description, description, date, location)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, user_id, title, short_description, description, date, location;
    `;
    const values = [
      user_id,
      title,
      short_description,
      description,
      date,
      location,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findById(id) {
    const query = 'SELECT * FROM events WHERE id = $1';
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findAll() {
    const query =
      'SELECT id, user_id, title, short_description, description, date, location FROM events';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async update(id, updatedValues) {
    const entries = Object.entries(updatedValues);
    const query = `UPDATE events SET ${entries
      .map(([column, value]) => `${column} = '${value}'`)
      .join(', ')} WHERE id = ${id} RETURNING *`;
    const { rows } = await pool.query(query);
    return rows[0];
  }
}

export default Event;
