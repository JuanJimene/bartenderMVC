<<<<<<< HEAD
const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderHomePage)

router.get("/customer", controller.renderCustomerPage)

router.get("/bartender", controller.renderBartenderPage)

router.post("/customer", controller.getDrinksMenu)

router.post('/receive', function(req, res) {
   //handle your request here.
} );

module.exports = router
=======
const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderHomePage)

router.get("/customer", controller.renderCustomerPage)

router.get("/bartender", controller.renderBartenderPage)

router.post("/customer", controller.getDrinksMenu)

router.post('/receive', function(req, res) {
   //handle your request here.
} );

module.exports = router
>>>>>>> 7fb4ae336de4b3d23f028a24cfff356381010878
