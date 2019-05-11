import { IPost } from '../../interfaces/IPost'
import db from '../../models'

const addPost = async (req: IPost): Promise<any> => {
  try {
    // const { body,userId } = req
    //420216cc-f64f-474a-86ee-e0a42981bfca
    const data =await db.Post.create(req)
    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

const getPosts = async (req: IPost): Promise<any> => {
  try {
    //const { body } = req
    const mockId = "b64ffd42-3d76-490a-95f2-ba608dc04e54"
    const data= await db.Post.findAll({
        include:[{
            model: db.User,
            as: 'author'
        }]
    })
    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

export default { addPost, getPosts }

