// Import express library - used to create servers & API's
const express = require('express')

const router = express.Router()

const menuController = require("../controllers/menuController")

router.post('/postmenu',menuController.createMenu)
router.get('/getmenu',menuController.getMenu)


module.exports = router