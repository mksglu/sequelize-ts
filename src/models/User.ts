import * as Sequelize from 'sequelize'
import { SequelizeAttributes } from '../interfaces/ISequelizeAttributes'
import { UserAttributes } from '../interfaces/IUser'

export const UserFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<{}, UserAttributes> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    name: {
      type: DataTypes.STRING
    }
  }

  const User = sequelize.define<{}, UserAttributes>('User', attributes)

  return User
}
