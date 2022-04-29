import { Request, Response } from "express";
import { ListUserProrfileUseCase } from "../../../use-cases/v1/user";


export class ListUserProrfileController {
  async handle(request: Request, response: Response){
    const { profile } = request.params
    const listUserProrfileUseCase = new ListUserProrfileUseCase();
    const user = await listUserProrfileUseCase.execute(profile)

    return response.json(user)
  }
}