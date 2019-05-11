import {Request,Response, Router} from 'express'
import userService from '../../services/users/users.service'
const router = Router();

router.post('/create', async (req:Request, res:Response)=>{
    const createUser = await userService.createUser(req.body)
    if (!createUser.status) return res.status(400).send(createUser);
    return res.status(201).send(createUser);
})

router.get('/users', async (req:Request, res:Response)=>{
    const getUsers = await userService.getUserPost(req.body)
    if (!getUsers.status) return res.status(400).send(getUsers);
    return res.status(201).send(getUsers);
})

export default router;