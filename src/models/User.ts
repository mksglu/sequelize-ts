import * as Sequelize from 'sequelize'
import { IUser } from '../interfaces/IUser'
import { SequelizeAttributes } from '../interfaces/ISequelizeAttributes'
type UserInstance = Sequelize.Instance<IUser> & IUser

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<IUser> = {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: { type: Sequelize.STRING, allowNull: false }
  }
  const User = sequelize.define<UserInstance, IUser>('User', attributes)

  User.associate = models => {
    User.hasMany(models.Post, { foreignKey: 'userId' })
  }

  return User
}
