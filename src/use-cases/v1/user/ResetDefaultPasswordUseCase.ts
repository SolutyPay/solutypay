import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { ResetDefaultPasswordUser } from "../../../dtos/v1";

export class ResetDefaultPasswordUseCase {
  async execute({ id, password }: ResetDefaultPasswordUser) {
    const userExist = await prisma.user.findFirst({
      where: { id: id },
    });

    if (!userExist) {
      throw new Error("User not already exists");
    }

    const hashPassword = await hash(password, 10);

    const result = await prisma.user.update({
      where: { id: id },
      data: {
        password: hashPassword,
      },
    });
    return result;
  }
}
