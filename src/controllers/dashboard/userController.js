import User from '../../models/tables/user.js';

export const getUsers = async (req, res) => {
  try {
    const data = await User.select('name, email');
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(500).json({ users: err.stack });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.select('*', `WHERE id = $1`, [id]);
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(500).json({ users: err.stack });
  }
};

export const addUser = async (req, res) => {
  const { name, email } = req.body;
  const columns = 'name, email';
  const values = `'${name}', '${email}'`;
  try {
    const data = await User.insertWithReturn(columns, values);
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(500).json({ users: err.stack });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedValues = {
    name,
    email,
  };
  try {
    const data = await User.update(updatedValues, id);
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(500).json({ users: err.stack });
  }
};
