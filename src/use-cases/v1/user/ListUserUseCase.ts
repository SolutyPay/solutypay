import { prisma } from "../../../database/prismaClient";

export class ListUserUseCase {
  async execute(){
    const user = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        photo: true,
      }
    });
    return user;
  }
}