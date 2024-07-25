import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../../models/user.js'

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

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
    console.error('Signup error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export async function login(req, res) {
  try {
    const email = req.body.email
    const password = req.body.password
    const user = await User.findByEmail(email)
    const isPasswordValid = await bcrypt.compare(password, user.password)
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    if (!user) {
      return res.status(400).json({ error: 'Invalid email' })
    }

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    res.status(200).json({ token, user })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
