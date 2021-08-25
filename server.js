const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userActivityList = require('./routes/api/userActivities')
const path = require('path')
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())


mongoose.connect("mongodb://localhost:27017/bara", {

    useNewUrlParser: true,
        useUnifiedTopology: true 
    });    

 
app.use('/api/userActivities', userActivityList)
 
if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/dist'))
   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
   })
}
 
app.listen(PORT, () => console.log(`app is fucking connected to http://localhost:${PORT}`))

