import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController;

// app.method("resource: route", (request, response))

router.post("/users", userController.create);

export { router };