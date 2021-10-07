import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";
import { FindUserValidate } from "./FindUserValidate";

const mongodbUsersRepository = new MongodbUsersRepository();

const findUserValidate = new FindUserValidate();
const findUserUseCase = new FindUserUseCase(mongodbUsersRepository);

const findUserController = new FindUserController(
  findUserUseCase,
  findUserValidate
);

export { findUserController, findUserUseCase };