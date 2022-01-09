import { Router } from "express";
import { createUserController } from "../controller/user/create"

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", (request, response) => {
    return response.send("está funcionando");
})

export { userRoutes }