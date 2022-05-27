const {Router} = require("express");
const {DrinksController} = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", DrinksController.getDrinks);
router.get("/drinks/in-stock", DrinksController.getDrinksByStocksId);
router.get("/drinks/:id", DrinksController.getStockId);
router.post("/drinks", DrinksController.postDrinks);
router.delete("/drinks/:id", DrinksController.deleteDrinksId);
router.patch("/drinks/:id", DrinksController.pathDrinksId);

module.exports = router;