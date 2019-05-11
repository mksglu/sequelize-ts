import * as Sequelize from 'sequelize'
import { IPost } from '../interfaces/IPost'
import { SequelizeAttributes } from '../interfaces/ISequelizeAttributes'
type UserInstance = Sequelize.Instance<IPost> & IPost

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<IPost> = {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    body: { type: Sequelize.STRING, allowNull: false }
  }
  const Post = sequelize.define<UserInstance, IPost>('Post', attributes)

  Post.associate = models => {
    Post.belongsTo(models.User, { foreignKey: 'userId' })
  }

  return Post
}
