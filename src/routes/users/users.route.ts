import {Request,Response, Router} from 'express'
import userService from './users.service'
import {UserAttributes} from '../../interfaces/IUser'
const router = Router();

router.post('/merhaba', async (req:Request, res:Response)=>{
    const mockData:UserAttributes = {id:3,name:"Omer"}
    await userService.createUser(mockData)
})

export default router;