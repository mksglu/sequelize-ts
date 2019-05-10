require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DEVELOPMENT_DATABASE_USER,
    password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
    database: process.env.DEVELOPMENT_DATABASE,
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
