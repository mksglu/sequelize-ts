import app from './app'
import { PORT } from './config'

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
