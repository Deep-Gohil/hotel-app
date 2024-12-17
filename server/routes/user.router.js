const {Router} = require("express");
const { GetAllUsers, getAdmins, Signup, Login, DeleteUser, GetUser, VerifyUser } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/all",GetAllUsers);
userRouter.get("/all-admin",getAdmins)
userRouter.get("/:id",GetUser);
userRouter.post("/signup",Signup);
userRouter.post("/login",Login);
userRouter.delete("/:id",DeleteUser);
userRouter.get("/verify/:token/:otp",VerifyUser)


module.exports = userRouter;