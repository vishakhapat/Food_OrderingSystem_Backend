const express = require('express')

const router = express.Router()

const orderController = require("../controllers/orderController")

router.post('/postorders',orderController.postOrders)

module.exports = router