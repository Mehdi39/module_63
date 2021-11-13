import express from 'express'
import cors from 'cors'

import user from './users.js'

const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Hello Express.js")
})

app.get('/users', (req, res) => {
    res.send(user)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})