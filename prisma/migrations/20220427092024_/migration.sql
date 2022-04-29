/*
  Warnings:

  - You are about to drop the column `default_password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `profile` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "default_password",
DROP COLUMN "profile";

-- CreateTable
CREATE TABLE "keys" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "client_id" TEXT,
    "client_secret" TEXT,
    "token" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "keys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "keys" ADD CONSTRAINT "keys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
