import express from 'express'
import cors from 'cors'
import {} from 'dotenv/config'

import router from './router'

const app = express()
app.use(express.json())
app.use(cors())
app.options('*', cors())

app.use('/', router)

app.get('/', (_, res) => {
    res.status(200).send({
        message: 'Hola Mundo!'
    })
})

app.listen(process.env.API_PORT)