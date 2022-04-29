import { Request, Response } from "express";
import { ListUserUseCase } from "../../../use-cases/v1/user";


export class ListUserController {
  async handle(request: Request, response: Response){
    const listUserUseCase = new ListUserUseCase();
    const user = await listUserUseCase.execute()

    return response.json(user)
  }
}