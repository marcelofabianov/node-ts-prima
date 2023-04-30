-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "registrationDocument" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inactivatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_registrationDocument_key" ON "Customer"("registrationDocument");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");
