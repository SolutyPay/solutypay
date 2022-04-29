import { prisma } from "../../../database/prismaClient";

export class ListUserProrfileUseCase {
  async execute(profile: string) {
    const user = await prisma.user.findMany({  
      select: {
        id: true,
        name: true,
        email: true,
        photo: true,
      },
    });
    return user;
  }
}
