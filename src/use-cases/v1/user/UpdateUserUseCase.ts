import { prisma } from "../../../database/prismaClient";
import { UpdateUser } from "../../../dtos/v1";

export class UpdateUserUseCase {
  async execute({ id, name, email, profile }: UpdateUser) {
    const userExist = await prisma.user.findFirst({
      where: { id: id },
    });

    if (!userExist) {
      throw new Error("User not already exists");
    }

    const result = await prisma.user.update({
      where: { id: id },
      data: {
        name,
        email,
      },
    });
    return result;
  }
}
