const express = require('express')
const cors  = require('cors')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')

const port = process.env.PORT || 3001

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(helmet())

app.get('/', (req, res) => {
    res.send('<center><h1> Spaarks Restaurant crud </h1></center>')
})


const restaurantRoutes = require('./routes/restaurant.route')

app.use('/api/v0/restaurant',restaurantRoutes)

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser:true,useUnifiedTopology:true
}).then(() => {
    app.listen(port , () => {
        console.log(`service running on port ${port}`)
    })
}).catch( (error) => {
    console.log(`${error} \n did not connect to the database`)
})

