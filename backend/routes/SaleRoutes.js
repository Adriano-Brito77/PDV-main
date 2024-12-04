const router = require("express").Router();

//controllers
const SaleController = require("../controllers/SaleController");

//middlewares
const checkToken = require("../helpers/check-Token");

router.post('/sale', checkToken,SaleController.register )
router.get('/salelist', SaleController.getItensSales )

module.exports = router