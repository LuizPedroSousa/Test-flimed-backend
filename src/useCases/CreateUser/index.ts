import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidate } from "./CreateUserValidate";

const createUserUseCase = new CreateUserUseCase(mongodbUsersRepository);
const createUserValidate = new CreateUserValidate(mongodbUsersRepository);
const createUserController = new CreateUserController(
  createUserUseCase,
  createUserValidate
);

export { createUserUseCase, createUserController };
