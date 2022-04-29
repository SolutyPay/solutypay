import { prisma } from "../../../database/prismaClient";
import { CreateBatchItens } from "../../../dtos/v1/batchItens";

export class CreateNewBatchItensUseCase {
  async execute({ userId, batchId, name, cpf, keyType, key, price, active}: CreateBatchItens) {

    const batch = await prisma.batchItens.create({
      data: {
        userId,
        batchId, 
        name, 
        cpf, 
        keyType, 
        key, 
        price,
        active
      },
    });

    return batch;
  }
}
