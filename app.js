require('dotenv').config()    //Environment Variables

// Import express library - used to create servers & API's
const express = require('express')

//Import Cors middleware (allows frontend to call backend)
const cors = require('cors')


// Run DB Connection File
require("./config/mongoose")

// Import routes
const menuRoutes = require("./routes/menuRoutes")
const orderRoutes = require("./routes/orderRoute")

// start an express application
const app = express()

// middleware to parse json (without this req.body won't work)
app.use(express.json())     

app.use(menuRoutes)
app.use(orderRoutes)

app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from this origin/ Url to call backend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization']  // Allow specific headers
}))




app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000.")
})


