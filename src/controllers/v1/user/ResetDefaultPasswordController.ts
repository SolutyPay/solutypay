import { Request, Response } from "express";
import { generatePassword } from "../../../helpers";
import { ResetDefaultPasswordUseCase } from "../../../use-cases/v1/user";

export class ResetDefaultPasswordController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const resetDefaultPasswordUseCase = new ResetDefaultPasswordUseCase();
    const NewPassword = generatePassword(6);

    const user = await resetDefaultPasswordUseCase.execute({
      id,
      password: NewPassword,
      default_password: true,
    });

    return response.json(user);
  }
}
