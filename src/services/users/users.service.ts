import { IUser } from '../../interfaces/IUser'
import db from '../../models'

const createUser = async (req: IUser): Promise<any> => {
  try {
    const { name } = req
    const data = await db.User.create({ name })
    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

export default { createUser }
