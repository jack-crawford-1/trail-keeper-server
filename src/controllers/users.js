import Model from '../models/model.js'

const usersModel = new Model('users')

export const usersPage = async (req, res) => {
  try {
    const data = await usersModel.select('name, email')
    res.status(200).json({ messages: data.rows })
  } catch (err) {
    res.status(200).json({ messages: err.stack })
  }
}

export const addUser = async (req, res) => {
  const { name, email } = req.body
  const columns = 'name, email'
  const values = `'${name}', '${email}'`
  try {
    const data = await usersModel.insertWithReturn(columns, values)
    res.status(200).json({ users: data.rows })
  } catch (err) {
    res.status(500).json({ users: err.stack })
  }
}
