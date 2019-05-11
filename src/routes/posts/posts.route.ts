import {Request,Response, Router} from 'express'
import postService from '../../services/posts/posts.service'
const router = Router();

router.post('/add', async (req:Request, res:Response)=>{
    const addPost = await postService.addPost(req.body)
    if (!addPost.status) return res.status(400).send(addPost);
    return res.status(201).send(addPost);
})

router.get('/posts', async (req:Request, res:Response)=>{
    const getPosts = await postService.getPosts(req.body)
    if (!getPosts.status) return res.status(400).send(getPosts);
    return res.status(201).send(getPosts);
})
export default router;