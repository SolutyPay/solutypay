import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AuthUser } from "../../../dtos/v1";

export class AuthUserUseCase {
  async execute({ email, password }: AuthUser) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email or Password invalid!");
    }
    // verificar se senha corresponde ao username
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Username or Password invalid!");
    }
    // gerar o token
    const token = sign(
      { email},
      String(process.env.SECURE_KEY),
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
    return token;
  }
}
