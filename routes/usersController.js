const router = require('express').Router()
const {User} = require('../db/model')

const { User } = require('../db/schema.js')

// Get All - INDEX

router.get('/', async (req, res) => {
    try {
      const users = await User.find({})
      res.json(users)
    } catch (err) {
      console.log(err)
    }
  })



// Get One User by ID - SHOW

router.get('/:id', async (req, res) => {
    try {
      const userId = req.params.id
      const user = await User.findById(userId)
      res.json(user)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  })
  



// Create new user - CREATE

router.post('/', async (req, res) => {
    try {
      const newUser = req.body
      const savedUser = await User.create(newUser)
      res.json(savedUser)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })


// Update a user - UPDATE

router.put('/:id', async (req, res) => {
    try {
      const userId = req.params.id
      const updatedUser = req.body
      const savedUser = await User.findByIdAndUpdate(userId, updatedUser)
      res.json(savedUser)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })


// Delete a user - DELETE

router.delete('/:id', async (req, res) => {
    try {
      const userId = req.params.id
      await User.findByIdAndRemove(userId)
      res.json({
        msg: 'Successfully Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })