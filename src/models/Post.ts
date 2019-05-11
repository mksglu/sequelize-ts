import * as Sequelize from 'sequelize'
import { IPost } from '../interfaces/IPost'
import { SequelizeAttributes } from '../interfaces/ISequelizeAttributes'

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<IPost> = {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    body: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }

  type MyModelStatic = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): IPost;
  }

  const Post:any = <MyModelStatic>sequelize.define('Post', attributes)

  Post.associate = (models:any) => {
    Post.belongsTo(models.User, { as: 'author', foreignKey: 'authorId' })
  }

  return Post
}
