// this folder is for any resources we have and here we will define the members resources

const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter a name']
    },
    email: {
        type: String,
        required: [true, 'please enter an email']
    }
}, {
    timestamps: true
})

// the name of the model is Member and the schema is memberSchema
module.exports = mongoose.model('Member', memberSchema)