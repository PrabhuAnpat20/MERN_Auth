const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')

const app=express()

const workoutRoutes=require('./routes/workout')

// middleware
app.use(express.json())

// routes
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
   .then(() => {
    app.listen(process.env.PORT,()=>{
        console.log("listening on 5000...")
    })
   })
   .catch((err)=>{
    console.log(err)
   })





