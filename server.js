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


    async function main(){

        const uri = "mongodb+srv://bara:bara123@cluster0.xtbxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
     
    
        const client = new MongoClient(uri);
     
        try {
            // Connect to the MongoDB cluster
            await client.connect();
     
            // Make the appropriate DB calls
            await  listDatabases(client);
     
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    async function listDatabases(client){
        databasesList = await client.db().admin().listDatabases();
     
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };
     
app.use('/routes/api/userActivities', userActivityList)
 
if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/dist'))
   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
   })
}
 
app.listen(PORT, () => console.log(`app is fucking connected to http://localhost:${PORT}`))

