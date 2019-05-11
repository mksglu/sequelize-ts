process.env.NODE_ENV = 'test'
import { IUser } from '../../interfaces/IUser'
import usersService from './users.service'
import truncate from '../../helpers/truncate'

describe('Users Service', () => {
  describe('/POST users', () => {
    const mockUser = <IUser>{ name: "I'm Test User" }
    it('it should be create a new user', async () => {
      const { data, status } = await usersService.createUser(mockUser)
      expect(status).toBe(true)
      expect(data.name).toEqual("I'm Test User")
    })
  })
  afterAll(async () => {
      await truncate()
  })
})
