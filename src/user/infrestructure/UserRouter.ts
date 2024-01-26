import express from "express";

import { createUserController } from "./dependencies";
import { getAllUserController } from "./dependencies";
import { getByIdUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.get("/getAll", getAllUserController.run.bind(getAllUserController));
userRouter.get("/:id", getByIdUserController.run.bind(getByIdUserController));
userRouter.post("/post", createUserController.run.bind(createUserController));
