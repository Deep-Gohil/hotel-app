const {Router} = require("express")
const { createHotel, getAllHotels, getHotel, updateHotel, deleteHotel } = require("../../controllers/superAdmin/superAdmin.controller")

const hotelRouter = Router()

hotelRouter.get("/all",getAllHotels)
hotelRouter.get("/:id",getHotel)

hotelRouter.post("/create",createHotel)

hotelRouter.patch("/update/:id",updateHotel)

hotelRouter.delete("/delete/:id",deleteHotel)

module.exports = hotelRouter;