const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    ConfirmPassword:{
        type:String
    },
})

module.exports = mongoose.model('user',recipeSchema)