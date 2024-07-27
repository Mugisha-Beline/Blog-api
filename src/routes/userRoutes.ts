import express from "express";
import { AuthController } from "../controllers/authController";
import { UserController } from "../controllers/userController";
import { verifyUserToken } from "../middlewares/verifyUserToken";
import {
  createUserDataValidator,
  loginUserDataValidator,
} from "../validators/user.validator";

const userRouter = express.Router();

// Define routes for user operations
userRouter.post("/register", createUserDataValidator, AuthController.registerUser); // User registration
userRouter.post("/login", loginUserDataValidator, AuthController.loginUser); // User login
userRouter.get("/profile", verifyUserToken, AuthController.getUser); // Get user profile (authenticated)
userRouter.get("/list", verifyUserToken, UserController.getAllUsers); // List all users (authenticated)

// Optionally, handle the /users base route
userRouter.get("/", (req, res) => {
  res.status(200).send({ message: "User API Base Route" });
});

export default userRouter;
