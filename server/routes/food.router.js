const {Router} = require("express")
const { getFoods, getFoodById, createFood, updateFood, deleteFood } = require("../controllers/food-controller")
const { decode } = require("../middleware/decode")

const foodRouter = Router()

foodRouter.get("/all",getFoods)
foodRouter.get("/:id",getFoodById)

foodRouter.post("/create",decode,createFood)

foodRouter.patch("/update/:id",updateFood)

foodRouter.delete("/delete/:id",deleteFood)

module.exports = foodRouter;