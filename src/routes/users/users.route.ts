import {Request,Response, Router} from 'express'
import userService from '../../services/users.service'
const router = Router();

router.post('/create', async (req:Request, res:Response)=>{
    const createUser = await userService.createUser(req.body)
    if (!createUser.status) return res.status(400).send(createUser);
    return res.status(201).send(createUser);
})

export default router;