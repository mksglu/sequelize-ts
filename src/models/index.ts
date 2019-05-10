import UserFactory from '../models/User'
import * as Sequelize from 'sequelize'
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  User: UserFactory(sequelize)
}

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db)
  }
})

db.sequelize.sync()

export default db
