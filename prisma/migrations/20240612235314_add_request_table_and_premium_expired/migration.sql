-- AlterTable
ALTER TABLE "users" ADD COLUMN     "premiumExpiredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "request" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "request_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
