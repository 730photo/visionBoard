const Schema = require('mongoose').Schema

const UserSchema = new Schema({
    userName: String,
    age: Number, 
    occupation: String
})

module.exports = {
    UserSchema
}





