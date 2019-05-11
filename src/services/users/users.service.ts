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

const getUserPost = async (req:IUser): Promise<any> => {
  try {
    //const { body } = req
    const mockId = "9fcc1d3c-4feb-4d4c-89ba-e91dd5c20f54"
    const data = await db.User.findAll({
        include:[db.Post]
    })
    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

export default { createUser,getUserPost }