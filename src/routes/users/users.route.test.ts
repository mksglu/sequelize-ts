process.env.NODE_ENV = 'test'
import * as request from 'supertest'
import server from '../../app'
import { IUser } from '../../interfaces/IUser'
import truncate from '../../helpers/truncate'

describe('Users Route', () => {
  describe('/POST users', () => {
    const mockUser = <IUser>{ name: "I'm Test User" }
    it('it should create a new user', async () => {
      const res = await request(server)
        .post('/create')
        .send(mockUser)
      expect(res.status).toBe(201)
    })
  })
  afterAll(async () => {
    await truncate()
  })
})
