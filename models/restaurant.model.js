const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        lattitude:{type:String , required:true},
        longitude:{type:String , required:true}
    },
    ratings:{
        type:Array,
        required:true,
        default:[]
    }
},

{timestamps:true}

)

module.exports = mongoose.model('Restaurants' , RestaurantSchema)