import Model from '../../models/model.js'

const forumPostsModel = new Model('forum_posts')

export const getForumPosts = async (req, res) => {
  try {
    const data = await forumPostsModel.select('user_id, content, created_at')
    res.status(200).json({ messages: data.rows })
  } catch (err) {
    res.status(200).json({ messages: err.stack })
  }
}

export const getForumPost = async (req, res) => {
  const { id } = req.params
  try {
    const data = await forumPostsModel.select('*', `WHERE id = $1`, [id])
    res.status(200).json({ events: data.rows })
  } catch (err) {
    res.status(500).json({ events: err.stack })
  }
}

export const addForumPost = async (req, res) => {
  const { user_id, content, created_at } = req.body
  const columns = 'user_id, content, created_at'
  const values = `${user_id}, '${content}', '${created_at}'`
  try {
    const data = await forumPostsModel.insertWithReturn(columns, values)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    res.status(500).json({ message: err.stack })
  }
}

export const updateForumPost = async (req, res) => {
  const { id } = req.params
  const { content } = req.body
  const updatedValues = { content }

  try {
    const data = await forumPostsModel.update(updatedValues, id)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    console.error('Error updating forum post:', err)
    res
      .status(500)
      .json({ message: `Error updating forum post: ${err.message}` })
  }
}
