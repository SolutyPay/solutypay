import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../use-cases/v1/user";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, photo } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      name,
      email,
      password,
      photo,
    });

    response.json(result);
  }
}
