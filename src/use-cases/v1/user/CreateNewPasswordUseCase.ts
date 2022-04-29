import { hash, compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { CreateNewPasswordUser } from "../../../dtos/v1";

export class CreateNewPasswordUseCase {
  async execute({
    id,
    new_password,
    old_password,
  }: CreateNewPasswordUser) {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });

    if (!user) {
      throw new Error("User not already exists");
    }

    const oldPasswordMatch = await compare(old_password, user.password);

    if (!oldPasswordMatch) {
      throw new Error("Old password invalid!");
    }

    const hashPassword = await hash(new_password, 10);

    const result = await prisma.user.update({
      where: { id: id },
      data: {
        password: hashPassword,
      },
    });
    return result;
  }
}
