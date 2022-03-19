import express from 'express'
import morgan from 'morgan'
import routes from '../routes/routes'

const app = express()
app.use(morgan('common'))

routes(app)

export default app
