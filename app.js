//connects express node.js library, cors, and routes into "head" file
const express = require('express')
const app = express()
const cors = require('cors')
const AppRouter = require('./routes/AppRouter')

//establishes PORT for localhost
const PORT = process.env.PORT || 3001

app.use(cors())
//will push data out in a json format
//V of MVC (Views)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
