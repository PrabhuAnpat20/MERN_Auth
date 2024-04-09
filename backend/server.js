const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')

const app=express()

const workoutRoutes=require('./routes/workout')
const userRoutes=require('./routes/user')
// middleware
app.use(express.json())

// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

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





