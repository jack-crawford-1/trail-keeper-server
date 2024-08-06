import Model from '../../models/model.js'

const trailsModel = new Model('trails')

export const getTrails = async (req, res) => {
  try {
    const data = await trailsModel.select('name, location')
    res.status(200).json({ trails: data.rows })
  } catch (err) {
    res.status(200).json({ trails: err.stack })
  }
}

export const getTrail = async (req, res) => {
  const { id } = req.params
  try {
    const data = await trailsModel.select('*', `WHERE id = $1`, [id])
    res.status(200).json({ trails: data.rows })
  } catch (err) {
    res.status(500).json({ trails: err.stack })
  }
}

export const addTrail = async (req, res) => {
  const { name, location } = req.body
  const columns = 'name, location'
  const values = `'${name}', '${location}'`
  try {
    const data = await trailsModel.insertWithReturn(columns, values)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    res.status(500).json({ message: err.stack })
  }
}

export const updateTrail = async (req, res) => {
  const { id } = req.params
  const { name, location } = req.body
  const columns = 'name, location'
  const values = `'${name}', '${location}'`
  try {
    const data = await trailsModel.update(columns, values, `id = ${id}`)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    res.status(500).json({ message: err.stack })
  }
}
