import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ashley Cooke',
    email: 'acooke@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Beatrice Beasley',
    email: 'bbeasley@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users