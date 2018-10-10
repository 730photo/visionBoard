const Schema = require('mongoose').Schema



const VisionSchema = new Schema({
    title: String,
    description: String
})

const UserSchema = new Schema({
    userName: String
})

module.exports = {
    UserSchema,
    VisionSchema
}





