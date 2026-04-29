//Import mongoose models
const Menu = require("../models/food")

exports.createMenu = async(req,res)=>{
    try{
        const menu = new Menu(req.body)                               //creates new menu
        const response = await menu.save()                            //saves data to mongoDB
        res.status(201).send(response)
        console.log(response)
    }
    catch(e){
        res.status(500).send({error: "Failed to add Menu"})
    }
}



exports.getMenu = async(req,res)=>{
    try{
        const response = await Menu.find()                          // Fetches all menues
        res.status(200).send(response)
    }
    catch(e){
        res.status(500).send({error: " Failed to load menues "})
    }
}
