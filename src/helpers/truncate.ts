import model from '../models'

export default async function truncate() {
  return await Promise.all(
    Object.keys(model).map(key => {
      if (['sequelize', 'Sequelize'].includes(key)) return null
      return model[key].destroy({ where: {}, force: true })
    })
  )
}
