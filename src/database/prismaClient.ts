import { PrismaClient } from "@prisma/client";
import { fieldEncryptionMiddleware } from 'prisma-field-encryption'

const prisma = new PrismaClient();

prisma.$use(
  fieldEncryptionMiddleware({
    // Don't version hardcoded keys though, this is an example:
    encryptionKey: 'k1.aesgcm256.DbQoar8ZLuUsOHZNyrnjlskInHDYlzF3q6y1KGM7DUM='
  })
)

export { prisma };