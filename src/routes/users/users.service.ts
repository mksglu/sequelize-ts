import { UserAttributes } from "../../interfaces/IUser";
import {UserFactory} from '../../models/User'
import db from '../../models'

const createUser = async (req:UserAttributes): Promise<any> => {
    console.log('Service Function', req)
    db.User.create(req)
}

export default { createUser };
