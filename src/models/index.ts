import UserFactory from '../models/User'
import * as Sequelize from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()
import { CONNECTION_URI } from '../config'

const sequelize = new Sequelize(CONNECTION_URI, { operatorsAliases: false })

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
