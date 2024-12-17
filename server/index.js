const express = require('express');
const connectToDatabase = require('./config/db');

require("dotenv").config()
const cors = require('cors');

const userRouter = require('./routes/user.router');
const hotelRouter = require('./routes/superAdmin/hotel-router');
const foodRouter = require('./routes/food.router');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());
app.use(cors({ origin: 'http://127.0.0.1:5501' }));




app.get("/",(req,res)=>{
    res.status(200).json({msg:"Default Route "});
});

app.use("/user",userRouter)
app.use("/hotel",hotelRouter)
app.use("/food",foodRouter)

const PORT = process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log(`listening on https:localhost:${PORT}`);
    connectToDatabase();
})