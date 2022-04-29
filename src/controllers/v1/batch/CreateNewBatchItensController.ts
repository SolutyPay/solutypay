import { Request, Response } from "express";
import { CreateNewBatchItensUseCase } from "../../../use-cases/v1/batch/CreateNewBatchItensUseCase";
import { CreateNewBatchUseCase } from "../../../use-cases/v1/batch/CreateNewBatchUseCase";

export class CreateNewBatchItensController {
  async handle(request: Request, response: Response) {
    const { id_user_key } = request;
    const { name, start, batchId, itens } = request.body;
    let result = <any>[]

    try {
      if (batchId === undefined) {
        console.log("batch em branco");
        const createNewBatchUseCase = new CreateNewBatchUseCase();
        const result_batch = await createNewBatchUseCase.execute({
          userId: id_user_key,
          name: name,
          start: start,
        });
  
        itens.map(async (item: any) => {
          const createNewBatchItensUseCase = new CreateNewBatchItensUseCase();
          const result = await createNewBatchItensUseCase.execute({
            userId: id_user_key,
            batchId: result_batch.id,
            name: item.name,
            cpf: item.cpf,
            keyType: item.keyType,
            key: item.key,
            price: item.price,
            active: item.active,
          });
          response.json(result);
        });
      } else {
        itens.map(async (item: any) => {
          const createNewBatchItensUseCase = new CreateNewBatchItensUseCase();
          const result_itens = await createNewBatchItensUseCase.execute({
            userId: id_user_key,
            batchId,
            name: item.name,
            cpf: item.cpf,
            keyType: item.keyType,
            key: item.key,
            price: item.price,
            active: item.active,
          });
  
          // await result.push(result_itens)
          return result_itens
        });
      }
    } catch (error) {
     return response.status(400).json({
      message: "error",
    });
    }
    
    return response.status(200).json({
      message: "tudo certo",
    });
    
  }
}
