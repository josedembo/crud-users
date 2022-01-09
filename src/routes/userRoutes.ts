import { Router } from "express";
import { createUserController } from "../controller/user/create";
import { getAllUsersController } from "../controller/user/getAll";

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes }