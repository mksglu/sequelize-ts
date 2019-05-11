import UserFactory from '../models/User'
import PostFactory from '../models/Post'
import * as Sequelize from 'sequelize'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../../config/database.js')[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

const db = {
  sequelize,
  Sequelize,
  User: UserFactory(sequelize),
  Post: PostFactory(sequelize)
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync()

export default db
