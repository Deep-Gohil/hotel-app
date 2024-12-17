const hotel = require("../../models/superAdmin/restaurant")

const createHotel = async(req,res)=>{
    try {
        let {name} = req.body;
    
        let newHotel = await hotel.findOne({name:name})
    
        if(newHotel){
            return res.status(400).json({error:"Hotel already exists"})
        }
    
        newHotel = await hotel.create(req.body)
        res.status(200).json("Restuarant Added Successfully")
    } catch (error) {
        res.status(400).json({msg:"Failed To Add New Hotel :",error})
    }
}

const getAllHotels = async(req,res) =>{
    try {
        let newHotel = await hotel.find()
        res.status(200).json(newHotel)
    } catch (error) {
        res.status(400).json({msg:"Failed To Get All Hotels :",error})
    }
}

const getHotel = async(req,res) =>{
    try {
        let {id} = req.params;
        let newHotel = await hotel.findById(id);
    
        res.status(200).json(newHotel)
    } catch (error) {
        res.status(400).json({msg:"Failed To Get Hotel :",error})
    }
}

const updateHotel = async(req,res) =>{
    try {
        let {id} = req.params;
        let newHotel = await hotel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json("Hotel Updated Successfully")
    } catch (error) {
        res.status(400).json({msg:"Failed To Update Hotel :",error})
    }
}

const deleteHotel = async(req,res) =>{
    try {
        let {id} = req.params;
        await hotel.findByIdAndDelete(id)
        res.status(200).json("Hotel Deleted Successfully")
    } catch (error) {
        res.status(400).json({msg:"Failed To Delete Hotel :",error})
    }
}
module.exports = {createHotel,getAllHotels,getHotel,updateHotel,deleteHotel}