import { CreateUserUseCase } from "../aplication/CreateUserUseCase";
import { GetAllUserUseCase } from "../aplication/GetAllUserUseCase";
import { GetByIdUserUseCase } from "../aplication/GetByIdUserUseCase";
import { CreateUserController } from "./controllers/CreateProductController";
import { GetAllUserController } from "./controllers/GetAllProductController";
import { GetByIdUserController } from "./controllers/GetByIdProductController";
import { MysqlUserRepository } from "./MysqlUserRepository";

export const mysqlUserRepository = new MysqlUserRepository();
export const createUserUseCase = new CreateUserUseCase(mysqlUserRepository);
export const getAllUseCase = new GetAllUserUseCase(mysqlUserRepository);
export const getByIdUserUseCase = new GetByIdUserUseCase(mysqlUserRepository);
export const createUserController = new CreateUserController(createUserUseCase);
export const getAllUserController = new GetAllUserController(getAllUseCase);
export const getByIdUserController = new GetByIdUserController(
  getByIdUserUseCase
);
