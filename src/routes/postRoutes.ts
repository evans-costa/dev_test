import { Router } from "express";
import { Request, Response } from "express"
import { PostController } from "../controllers/PostController";

const postRoutes = Router()
const postController = new PostController();

postRoutes.post("/", (req: Request, res: Response) => 
  postController.createPost(req, res))

export default postRoutes;