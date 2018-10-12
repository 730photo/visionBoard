const Schema = require('mongoose').Schema



const VisionSchema = new Schema({
    title: String,
    description: String,
    image_url: String
})

const UserSchema = new Schema({
    userName: String,
    visions: [VisionSchema]
})

module.exports = {
    UserSchema,
    VisionSchema
}





