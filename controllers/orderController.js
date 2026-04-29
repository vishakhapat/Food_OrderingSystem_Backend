//Import Order Model
const Order = require("../models/order")

exports.postOrders = async(req,res)=>{
    try{  
    const orderData = req.body.order;
    if (!req.body.order) {
    return res.status(400).send({ error: "Order data required" })
}
    const newOrder = new Order(orderData)
    const savedOrder = await newOrder.save()
    res.status(201).send(savedOrder)
    
    
    }
    catch(e){
        res.status(500).send({error: "Failed to save Orders"})
    }

}
