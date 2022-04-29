import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { CreateKey } from "../../../dtos/v1";
import { sign } from "jsonwebtoken";

export class CreateNewKeyUseCase {
  async execute({ userId }: CreateKey) {
    const keyExist = await prisma.keys.findFirst({
      where: {
        userId:  userId,
          
      },
    });

    if (keyExist) {
      throw new Error("Key already exists");
    }

    const keyClientId = await hash(userId, 5);
    const keyClientSecret = await hash(userId, 10);

    const clientId =  keyClientId;
    const clientSecret = keyClientSecret;

    const generateToken = sign(
      { userId },
      String(process.env.SECURE_KEY_KEYS),
      {
        subject: userId,
        expiresIn: "365d",
      }
    );

    const key = await prisma.keys.create({
      data: {
        userId, 
        client_id: clientId, 
        client_secret: clientSecret, 
        token: generateToken
      },
    });

    return key;
  }
}
