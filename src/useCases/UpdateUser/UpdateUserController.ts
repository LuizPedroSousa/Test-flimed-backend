import { Request, Response } from "express";
import { CustomError } from "../../entities/CustomError";
import { CustomRequest } from "../../entities/CustomRequest";
import { UpdateUserRequestDTO } from "./UpdaterUserDTO";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserValidate } from "./UpdateUserValidate";

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase,
    private updateUserValidate: UpdateUserValidate
  ) {}

  async handle(req: CustomRequest, res: Response): Promise<Response> {
    const {
      body: { email, name },
      user,
    } = req;

    if (!email && !name) {
      throw new CustomError({ message: "Invalid data" });
    }

    const data: UpdateUserRequestDTO = {
      user_id: user._id,
      email: user.email,
      name: user.password,
    };

    await this.updateUserValidate.execute(data);
    const userUpdated = await this.updateUserUseCase.execute(data);

    return res.status(200).json({ user: userUpdated });
  }
}