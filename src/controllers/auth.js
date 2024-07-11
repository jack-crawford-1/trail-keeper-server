import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user.js'

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const existingUser = await User.findByEmail(email)

    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' })
    }

    const newUser = await User.create({ name, email, password })

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(201).json({ token, user: newUser })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findByEmail(email)

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(200).json({ token, user })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export { signup, login }
