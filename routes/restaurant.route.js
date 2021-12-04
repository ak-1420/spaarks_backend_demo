const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurant.controller')

// create a work using post 
router.post('/',restaurantController.create)

// update a work using put
router.put('/:id',restaurantController.update)

// delete a work using delete 
router.delete('/:id',restaurantController.delete)

// fetch all the restaurants
router.get('/',restaurantController.fetch)

// fetch a restaurant by id
router.get('/:id',restaurantController.fetchById)





module.exports = router