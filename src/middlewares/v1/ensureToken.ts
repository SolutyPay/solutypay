import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../../dtos/v1";
import { prisma } from "../../database/prismaClient";


export async function ensureToken(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  
  const clientID = request.headers.client_id;
  const securityID = request.headers.client_secret;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  if (!clientID) {
    return response.status(401).json({
      message: "clientID missing",
    });
  }

  if (!securityID) {
    return response.status(401).json({
      message: "securityID missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      String(process.env.SECURE_KEY_KEYS)
    ) as Payload;

    request.id_user_key = sub;

    const keysUser = await prisma.keys.findMany({  
      where: {
        userId: sub,
      },
      select: {
        client_id: true,
        client_secret: true,
      },
    }) 

    console.log(keysUser[0].client_id)
    if (keysUser[0].client_id !== clientID) {
      throw new Error("ClientID invalid");
    }

    if (keysUser[0].client_secret !== securityID) {
      throw new Error("SecurityID invalid");
    }

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token",
    });
  }
}
