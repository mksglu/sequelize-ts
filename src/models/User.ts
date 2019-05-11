import * as Sequelize from 'sequelize'
import { IUser } from '../interfaces/IUser'
import { SequelizeAttributes } from '../interfaces/ISequelizeAttributes'

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<IUser> = {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: { type: Sequelize.STRING, allowNull: false }
  }

  type MyModelStatic = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): IUser
  }

  const User: any = <MyModelStatic>sequelize.define('User', attributes)

  User.associate = (models: any) => {
    User.hasMany(models.Post, { foreignKey: 'authorId' })
  }

  return User
}
