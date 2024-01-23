import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { GetAllProductUseCase } from "../application/GetAllProductUseCase";
import { GetByIdProductUseCase } from "../application/GetByIdProductUseCase";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetAllProductController } from "./controllers/GetAllProductController";
import { GetByIdProductController } from "./controllers/GetByIdProductController";
import { MysqlProductRepository } from "./MysqlProductRepository";

export const mysqlProductRepository = new MysqlProductRepository();
export const createProductUseCase = new CreateProductUseCase(
  mysqlProductRepository
);
export const getAllUseCase = new GetAllProductUseCase(mysqlProductRepository);
export const getByIdProductUseCase = new GetByIdProductUseCase(
  mysqlProductRepository
);
export const createProductController = new CreateProductController(
  createProductUseCase
);
export const getAllProductController = new GetAllProductController(
  getAllUseCase
);
export const getByIdProductController = new GetByIdProductController(
  getByIdProductUseCase
);
