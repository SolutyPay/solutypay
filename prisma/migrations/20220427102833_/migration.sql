-- AlterTable
ALTER TABLE "keys" ALTER COLUMN "token" DROP NOT NULL;

-- CreateTable
CREATE TABLE "batch" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "batch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "batch" ADD CONSTRAINT "batch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
