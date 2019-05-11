import { DataTypeAbstract, ModelAttributeColumnOptions } from 'sequelize';

type SequelizeAttribute = string | DataTypeAbstract | ModelAttributeColumnOptions;

export type SequelizeAttributes<T extends { [key: string]: any }> = {
  [P in keyof T]: SequelizeAttribute
};