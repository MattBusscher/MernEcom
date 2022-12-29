import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Dow',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Dow',
        email: 'Jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
]

export default users