const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('satkargautam')
})
app.get('/twitter', (req, res) => {
    res.send('bhag chutiya')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})