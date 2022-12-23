import express from 'express'
import { AppDataSource } from './data-source'

try {
  AppDataSource.initialize().then(() => {
    const port = process.env.PORT

    const app = express()

    app.use(express.json())

    app.get('/', (req, res) => {
      return res.json('Hello World!')
    })

    app.listen(port)
  })
} catch (error) {
  console.log(error)
}
