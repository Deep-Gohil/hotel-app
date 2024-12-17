const Food = require("../models/food")

const createFood = async (req, res) => {
    try {
        const restaurantId = req.user.restaurantId; 
        req.body.restaurantId = restaurantId;

        const newFood = await Food.create(req.body);
        res.status(200).json({ message: "Food Added Successfully"});
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Failed to Add Food", error: error.message });
    }
};

const getFoods = async(req,res) => {
    try {
        const foods = await Food.find()
        res.status(200).json(foods)
    } catch (error) {
        res.status(400).json("Failed to Retrieve Foods")
    }
}

const getFoodById = async(req,res) => {
    try {
        const food = await Food.findById(req.params.id)
        if(!food) return res.status(404).json("Food Not Found")
        res.status(200).json("Food Retrieved Successfully")
    } catch (error) {
        res.status(400).json("Failed to Retrieve Food",error)
    }
}

const updateFood = async(req,res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if(!food) return res.status(404).json("Food Not Found")
        res.status(200).json("Food Updated Successfully")
    } catch (error) {
        res.status(400).json("Failed to Update Food",error)
    }
}

const deleteFood = async(req,res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id)
        if(!food) return res.status(404).json("Food Not Found")
        res.status(200).json("Food Deleted Successfully")
    } catch (error) {
        res.status(400).json("Failed to Delete Food",error)
    }
}

module.exports = {createFood,getFoods,getFoodById,updateFood,deleteFood}