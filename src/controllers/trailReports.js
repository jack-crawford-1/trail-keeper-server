import Model from '../models/model.js'
const trailReportsModel = new Model('trail_reports')

export const getTrailReports = async (req, res) => {
  try {
    const data = await trailReportsModel.select(
      'trail_id, condition, report_date, reporter'
    )
    res.status(200).json({ messages: data.rows })
  } catch (err) {
    res.status(200).json({ messages: err.stack })
  }
}

export const getTrailReport = async (req, res) => {
  const { id } = req.params
  try {
    const data = await trailReportsModel.select('*', `WHERE id = $1`, [id])
    res.status(200).json({ events: data.rows })
  } catch (err) {
    res.status(500).json({ events: err.stack })
  }
}

export const addTrailReport = async (req, res) => {
  const { trail_id, condition, report_date, reporter } = req.body
  const columns = 'trail_id, condition, report_date, reporter'
  const values = `${trail_id}, '${condition}', '${report_date}', ${reporter}`
  try {
    const data = await trailReportsModel.insertWithReturn(columns, values)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    res.status(500).json({ message: err.stack })
  }
}

export const updateTrailReport = async (req, res) => {
  const { id } = req.params
  const { trail_id, condition, report_date, reporter } = req.body
  const updatedValues = { trail_id, condition, report_date, reporter }
  try {
    const data = await trailReportsModel.update(updatedValues, id)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    console.error('Error updating trail report:', err)
    res
      .status(500)
      .json({ message: `Error updating trail report: ${err.message}` })
  }
}
