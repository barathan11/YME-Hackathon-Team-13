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




    const db = mongoose.connect("mongodb://localhost:27017/bara", 
    {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    }).then(() => {
    console.log("Connected To Mongodb DataBase after fucking years");
    }).catch((err) => {
    console.log("DataBase Connection Error " + err);
    });
 
app.use('/routes/api/userActivities', userActivityList)
 
if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/dist'))
   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
   })
}
 
app.listen(PORT, () => console.log(`app is fucking connected to http://localhost:${PORT}`))

