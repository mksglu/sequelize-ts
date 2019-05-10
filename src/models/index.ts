import UserFactory from '../models/User'
import * as Sequelize from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()
import {
  PRODUCTION_DATABASE,
  PRODUCTION_DATABASE_USER,
  PRODUCTION_DATABASE_PASSWORD
} from '../config'

const sequelize = new Sequelize(
  PRODUCTION_DATABASE,
  PRODUCTION_DATABASE_USER,
  PRODUCTION_DATABASE_PASSWORD,
  { dialect: 'postgres' }
)

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
