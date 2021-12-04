const Restaurant = require('../models/restaurant.model')
const Helpers = require('../helpers/distanceCalculator.helper')


// create a restaurant
exports.create = async (req , res) => {
    
    const newRestaurant = Restaurant(req.body)

    try {
        
        const savedRestaurant = await newRestaurant.save()

        res.status(200).send({
            message:'restuarant created successfully!',
            data:savedRestaurant
        })

    } catch (error) {
        res.status(500).send({
            message:'an error occured!',
            error:error
        })
    }
}

// update a restaurant
exports.update = async (req , res) => {

    try {

        const restaurant = await Restaurant.findById(req.params.id)

        if(restaurant !== null)
        {
           const updatedRestaurant = await restaurant.updateOne({$set:req.body},{new:true})

           res.status(200).send({
               message:'the restaurant has been updated',
               data:updatedRestaurant
           })
        }
        else
        {
            res.status(400).send({
                message:'restaurant with given id does not exist'
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:'an error occured!',
            error:error
        })
    }
}

// delete a restaurant
exports.delete = async (req , res) => {

    try {

        const restaurant = await Restaurant.findById(req.params.id)

        if(restaurant !== null)
        {
              await restaurant.deleteOne()

              res.status(200).send({
                  message:'the restuarant has been deleted!'
              })
        }
        else
        {
            res.status(400).send({
                message:'restaurant with given id does not exist'
            })   
        }
        
    } catch (error) {
        res.status(500).send({
            message:'an error occured!',
            error:error
        })
    }
}


// fetch all restaurants 

exports.fetch = async (req , res) => {


        const lat = req.query.lat
        const lng = req.query.lng
        const radius = req.query.radius

    try {

        const restaurants = await Restaurant.find()

        if(lat !== undefined && lng !== undefined && radius !== undefined)
        {
            // return restaurants based on location

            const restaurantsWithInRadius = restaurants.filter( (restaurant) => {
                // get the restaurant location

                const restaurantLat = parseFloat(restaurant.location.lattitude)
                const restaurantLng = parseFloat(restaurant.location.longitude)

                // find the distance

                const distance = Helpers.getDistance(lat , lng , restaurantLat , restaurantLng)


                // check if the distance in within in the radius

                return (distance <= radius)
            })
           

            const sumReducer = (prev , curr) => prev + curr;

            const result = restaurantsWithInRadius.map((restaurant) => {

                const sum = restaurant.ratings.reduce(sumReducer)
                const len = restaurant.ratings.length

                const avg = sum / len;


                return {
                    name: restaurant.name,
                    description:restaurant.description,
                    location:restaurant.location,
                    averageRating:avg,
                    numberOfRatings:len
                }
            })

            res.status(200).send({
                message:'fetched restaurants based on location!',
                data: result
           })

        }
        else
        {
              res.status(200).send({
                   message:'restaurants fetched successfully!',
                   data:restaurants
              })
        }
 
    } catch (error) {

        res.status(500).send({
            message:'an error occured!',
            error:error
        })
    }
}

// fetch a restuarant by id

exports.fetchById = async (req , res) => {
    
    try {

        const restaurant = await Restaurant.findById(req.params.id)
        
        if(restaurant !== null)
        {
           res.status(200).send({
               message:'restaurant fetched successfully!',
               data:restaurant
           })
        }
        else
        {
            res.status(400).send({
                message:'restaurant with given id does not exist'
            })     
        }
    } catch (error) {
        res.status(500).send({
            message:'an error occured!',
            error:error
        })
    }
}
