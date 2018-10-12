// requiring express 
const router = require('express').Router({mergeParams: true})
const { User, Vision } = require('../db/model')


router.get('/', async(req,res) => {
    const visions = await Vision.find()
    res.send(visions) 
})
// making a promise when you click on the 'new vision' button
// router.post('/', (req, res) => {
//     const newVision = new Vision.
//     console.log(req.params.userId)
//     User.findById(req.params.userId)
//     .then((user) => {
//         user.visions.push(newVision)
//         return user.save()
//     })
//     .then((user) => {
//         res.send(user)
//     })
// })

router.post('/', async (req, res) => {
    const newVision = await Vision.create(req.body)
    const visions = await Vision.find()
    visions.push(newVision)
        res.send(visions)
    })
  

    

  
  
  
    module.exports = router