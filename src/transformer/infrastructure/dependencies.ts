import { CreateTransformerUseCase } from "../application/CreateTransformerUseCase";
import { GetAllTransformerUseCase } from "../application/GetAllTransformerUseCase";
import { GetByIdTransformerUseCase } from "../application/GetByIdTransformerUseCase";
import { GetByUserTransformerUseCase } from "../application/GetByUserTransformerUseCase";

import { CreateTransformerController } from "./controllers/CreateTransformerProductController";
import { GetAllTransformerController } from "./controllers/GetAllTransformerController";
import { GetByIdTransformerController } from "./controllers/GetByIdTransformerController";
import { GetByUserTransformerController } from "./controllers/GetByUserTransformerController";

import { MysqlTransformerRepository } from "./MysqlTransformerRepository";

export const mysqlTransformerRepository = new MysqlTransformerRepository();
export const createTransformerUseCase = new CreateTransformerUseCase(
  mysqlTransformerRepository
);
export const getAllUseCase = new GetAllTransformerUseCase(mysqlTransformerRepository);
export const getByUserTransformerUseCase = new GetByIdTransformerUseCase(
  mysqlTransformerRepository
);
export const getByIdTransformerUseCase = new GetByUserTransformerUseCase(
  mysqlTransformerRepository
);
export const createTransformerController = new CreateTransformerController(
  createTransformerUseCase
);
export const getAllTransformerController = new GetAllTransformerController(
  getAllUseCase
);
export const getByIdTransformerController = new GetByIdTransformerController(
  getByIdTransformerUseCase
);
export const getByUserTransformerController = new GetByUserTransformerController(
  getByUserTransformerUseCase
);

