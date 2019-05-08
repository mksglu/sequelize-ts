import * as Sequelize from 'sequelize';
import { UserAttributes } from '../interfaces/IUser';

export default interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<{},UserAttributes>;
}