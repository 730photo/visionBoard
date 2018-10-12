//requiring dotenv and mongoose
require('dotenv').config()
const mongoose = require('mongoose')

//connecticting Mongoose to the database
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  
  const { User } = require('./model')

  const reg = new User({
      userName: 'architekespy'
  })




  //saving the data
User.remove({})
.then(() => reg.save())
.then(() => {
    console.log('Successful Save')
    mongoose.connection.close()
})