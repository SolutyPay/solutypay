import { Request, Response } from "express";
import { AuthUserUseCase } from "../../../use-cases/v1/auth";

export class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserUseCase = new AuthUserUseCase();
    const result = await authUserUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
