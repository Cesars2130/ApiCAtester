import express from "express";

import { createTransformerController, getAllTransformerController, getByIdTransformerController,getByUserTransformerController } from "./dependencies";



export const transformerRouter = express.Router();

transformerRouter.get(
  "/getAll",
  getAllTransformerController.run.bind(getAllTransformerController)
);
transformerRouter.get(
  "/:id_transformer",
  getByIdTransformerController.run.bind(getByIdTransformerController)
);
transformerRouter.get(
  "/user/:id_user",
  getByUserTransformerController.run.bind(getByUserTransformerController)
);
transformerRouter.post(
  "/post",
  createTransformerController.run.bind(createTransformerController)
);
