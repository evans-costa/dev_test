import { Router } from "express";
import { Request, Response } from "express"
import { UserController } from "../controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", (req: Request, res: Response) => 
  userController.createUser(req, res))

export default userRoutes;