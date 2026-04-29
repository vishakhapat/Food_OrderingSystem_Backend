require("../config/mongoose")
const mongoose = require('mongoose')

const Menu = mongoose.model("Menu",{
    name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})



module.exports = Menu
