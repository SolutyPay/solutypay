import { Request, Response } from "express";
import { CreateNewPasswordUseCase } from "../../../use-cases/v1/user";

export class CreateNewPasswordController {
  async handle(request: Request, response: Response) {
    const { id_user } = request;
    const { old_password, new_password } = request.body;

    const createNewPasswordUseCase = new CreateNewPasswordUseCase();
    const user = await createNewPasswordUseCase.execute({
      id: id_user,
      old_password,
      new_password,
      default_password: false,
    });

    return response.json(user);
  }
}
