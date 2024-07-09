import Model from '../models/model.js'

const messagesModel = new Model('messages')

export const getMessages = async (req, res) => {
  try {
    const data = await messagesModel.select('user_id, message, created_at')
    res.status(200).json({ messages: data.rows })
  } catch (err) {
    res.status(200).json({ messages: err.stack })
  }
}

export const addMessage = async (req, res) => {
  const { user_id, message } = req.body
  const created_at = new Date().toISOString()
  const columns = 'user_id, message, created_at'
  const values = `${user_id}, '${message}', '${created_at}'`
  try {
    const data = await messagesModel.insertWithReturn(columns, values)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    res.status(500).json({ message: err.stack })
  }
}
