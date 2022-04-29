import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { CreateUser } from "../../../dtos/v1";
import { generatePassword } from "../../../helpers";

export class CreateUserUseCase {
  async execute({ name, email, password, photo }: CreateUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        email:  email,
          
      },
    });

    if (userExist) {
      throw new Error("User already exists");
    }

    var NewPassword;
    if (!password) {
      NewPassword = generatePassword(6);
    } else {
      NewPassword = password;
    }

    console.log(NewPassword);
    const hashPassword = await hash(NewPassword, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        photo,
      },
    });

    return user;
  }
}
