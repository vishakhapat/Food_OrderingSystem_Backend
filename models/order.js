require("../config/mongoose")
const mongoose = require('mongoose')


const Order = mongoose.model("Order",{
    items:Array,
    customer : Object
})


module.exports = Order