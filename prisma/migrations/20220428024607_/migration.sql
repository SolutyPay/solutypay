/*
  Warnings:

  - You are about to drop the column `itensData` on the `batch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "batch" DROP COLUMN "itensData";

-- CreateTable
CREATE TABLE "batchItens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "name" TEXT,
    "cpf" TEXT,
    "keyType" TEXT,
    "key" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "batchItens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "batchItens" ADD CONSTRAINT "batchItens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batchItens" ADD CONSTRAINT "batchItens_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
