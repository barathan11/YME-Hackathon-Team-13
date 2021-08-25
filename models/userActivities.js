const { Schema, model } = require('mongoose')

const userActivitiesSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const userActivities = model('UserActivities', userActivitiesSchema)

module.exports = userActivities