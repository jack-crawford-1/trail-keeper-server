import Model from '../models/model.js'
const trainingModulesModel = new Model('training_modules')

export const getTrainingModules = async (req, res) => {
  try {
    const data = await trainingModulesModel.select('user_id, title, content')
    res.status(200).json({ messages: data.rows })
  } catch (err) {
    res.status(200).json({ messages: err.stack })
  }
}

export const addTrainingModule = async (req, res) => {
  const { user_id, title, content } = req.body
  const columns = 'user_id, title, content'
  const values = `${user_id}, '${title}', '${content}'`
  try {
    const data = await trainingModulesModel.insertWithReturn(columns, values)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    res.status(500).json({ message: err.stack })
  }
}
