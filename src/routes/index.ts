import { Application } from 'express'
import userRoute from './users/users.route'
import postRoute from './posts/posts.route'
export class Routes {
  public routes(app: Application): void {
    app.use('/', userRoute, postRoute)
  }
}
