import { prisma } from "../../../database/prismaClient";
import { RemoveUser } from "../../../dtos/v1";

export class RemoveUserUseCase {
  async execute({ id, active }: RemoveUser) {
    const userExist = await prisma.user.findFirst({
      where: { id: id },
    });

    if (!userExist) {
      throw new Error("User not already exists");
    }

    const result = await prisma.user.update({
      where: { id: id },
      data: {
        active,
      },
    });
    return result;
  }
}
