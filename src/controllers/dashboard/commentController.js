import Model from '../../models/model.js'

const commentsModel = new Model('comments')

export const getComments = async (req, res) => {
  const { eventId } = req.query
  try {
    const data = await commentsModel.select(
      'id, post_id, user_id, content, created_at',
      'WHERE post_id = $1',
      [eventId]
    )
    res.status(200).json({ comments: data.rows })
  } catch (err) {
    res.status(500).json({ error: err.stack })
  }
}

export const getComment = async (req, res) => {
  const { id } = req.params
  try {
    const data = await commentsModel.select(
      'post_id, user_id, content, created_at',
      'WHERE id = $1',
      [id]
    )
    res.status(200).json({ comment: data.rows[0] })
  } catch (err) {
    res.status(500).json({ error: err.stack })
  }
}

export const addComment = async (req, res) => {
  const { post_id, user_id, content, created_at } = req.body
  const columns = 'post_id, user_id, content, created_at'
  const values = [post_id, user_id, content, created_at]

  try {
    const data = await commentsModel.insertWithReturn(columns, values)
    res.status(201).json({ comment: data.rows[0] })
  } catch (err) {
    console.error('Error adding comment', err)
    res.status(500).json({ error: err.stack })
  }
}

export const updateComment = async (req, res) => {
  const { id } = req.params
  const { post_id, user_id, content, created_at } = req.body
  const updatedValues = {
    post_id,
    user_id,
    content,
    created_at,
  }

  try {
    const data = await commentsModel.update(updatedValues, id)
    res.status(200).json({ comment: data.rows[0] })
  } catch (err) {
    console.error('Error updating comment', err)
    res.status(500).json({ error: err.stack })
  }
}
