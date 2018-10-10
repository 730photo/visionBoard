const mongoose = require('mongoose')
const { UserSchema, VisionSchema } = require('./schema')

const UserModel = mongoose.model('User', UserSchema)
const VisionModel = mongoose.model('Vision', VisionSchema)

module.exports={
    User: UserModel,
    Vision: VisionModel
}
