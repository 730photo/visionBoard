// requiring express 
const router = require('express').Router({mergeParams: true})
const { User, Vision } = require('../db/model')

// making a promise when you click on the 'new vision' button
router.post('/', (req, res) => {
    const newVision = new Vision()
    User.findById(req.params.userId)
    .then((user) => {
        user.visions.push(newVision)
        return user.save()
    })
    .then((user) => {
        res.send(user)

    })
})


  

  

module.exports = router