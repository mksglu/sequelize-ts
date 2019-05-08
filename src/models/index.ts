import { UserFactory } from '../models/User'
import { IDB } from '../interfaces'
import * as Sequelize from 'sequelize'
const sequelize = new Sequelize.Sequelize(
  'postgres://postgres:changeme@localhost:5432/shortenurl'
)
const db: IDB = {
  sequelize,
  Sequelize,
  User: UserFactory(sequelize, Sequelize)
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize.sync()


export default db