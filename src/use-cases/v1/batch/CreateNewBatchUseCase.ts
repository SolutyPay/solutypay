import { prisma } from "../../../database/prismaClient";
import { CreateBatch } from "../../../dtos/v1";

export class CreateNewBatchUseCase {
  async execute({ userId, name, start}: CreateBatch) {
  
    const batch = await prisma.batch.create({
      data: {
        userId,
        name,
        start
      },
    });

    return batch;
  }
}
