import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserValidate } from "./DeleteUserValidate";

const mongodbUsersRepository = new MongodbUsersRepository();
const deleteUserUseCase = new DeleteUserUseCase(mongodbUsersRepository);
const deleteUserValidate = new DeleteUserValidate();
const deleteUserController = new DeleteUserController(
  deleteUserUseCase,
  deleteUserValidate
);

export { deleteUserController, deleteUserUseCase };