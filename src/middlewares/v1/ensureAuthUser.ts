import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../../dtos/v1";

export async function ensureAuthUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      String(process.env.SECURE_KEY)
    ) as Payload;

    request.id_user = sub;


    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token",
    });
  }
}
