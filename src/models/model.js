import { pool } from './pool.js'

class Model {
  constructor(table) {
    this.pool = pool
    this.table = table
    this.pool.on(
      'error',
      (err, client) => `Error, ${err}, on idle client${client}`
    )
  }

  async select(columns = '*', clause = '', params = []) {
    const query = `SELECT ${columns} FROM ${this.table} ${clause}`
    try {
      const { rows } = await this.pool.query(query, params)
      return { rows }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  async insertWithReturn(columns, values) {
    const query = `INSERT INTO ${this.table}(${columns}) VALUES (${values}) RETURNING *`
    const { rows } = await pool.query(query)
    return { rows }
  }

  async update(updatedValues, id) {
    const entries = Object.entries(updatedValues)
    const query = `UPDATE ${this.table} SET ${entries
      .map(([column, value]) => `${column} = '${value}'`)
      .join(',')} WHERE id = ${id} RETURNING *`
    const { rows } = await pool.query(query)
    return { rows }
  }
}
export default Model
