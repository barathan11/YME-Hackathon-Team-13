const { Schema, model } = require('mongoose')
 
const UserActivitySchema = new Schema({
   description: {
       type: String,
       required: true,
   },
   date: {
       type: Date,
       default: Date.now,
   },
})
 
const UserActivity = model('userActivity', UserActivitySchema)
 
module.exports = UserActivity

